import { useState, useEffect, createContext, lazy, Suspense, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { slugify } from './helpers';
import NavPrimary from './shared/components/navPrimary/NavPrimary';
import { useGetCollectionsQuery } from './shared/types/contentful';
import { IdLookup, IdLookupEntry } from './shared/types/docs';
import logo from "../assets/images/logo-bsc.svg";

const CodeStandardsRouter = lazy(() => import('./codeStandards/CodeStandardsRouter'));
const ComponentsRouter = lazy(() => import('./components/ComponentsRouter'));
const ContentGuidelinesRouter = lazy(() => import('./contentGuidelines/ContentGuidelinesRouter'));
const FoundationsRouter = lazy(() => import('./foundations/FoundationsRouter'));
const ResourcesRouter = lazy(() => import('./resources/ResourcesRouter'));

interface Collection {
  items: {
    sys: {
      id: string;
    }
    name: string;
  }[];
}

const initialIdLookup: IdLookup = {
  contentGuidelines: {},
  components: {},
  codeStandards: {},
  foundations: {},
  resources: {}
};

export const IdLookupContext = createContext<IdLookup>(initialIdLookup);

const App = (): JSX.Element => {
  const [idLookup, setIdLookup] = useState<IdLookup>({} as IdLookup);
  const [isLookupReady, setIsLookupReady] = useState(false);
  const {data, error} = useGetCollectionsQuery({
    variables: {
      preview: process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true'
    }
  });

  if (error) {
    console.error(error);
  }

  const createLookup = useCallback((collection: Collection, destination: IdLookupEntry) => {
    collection.items.forEach((item) => (
      destination[slugify(item?.name as string)] = {
        id: item?.sys.id,
        name: item?.name
      })
    );
  }, []);

  useEffect(() => {
    if (data) {
      const idMap: IdLookup = initialIdLookup;
      createLookup(data.foundationCollection as Collection, idMap.foundations);
      createLookup(data.contentGuidelineCollection as Collection, idMap.contentGuidelines);
      createLookup(data.codeStandardCollection as Collection, idMap.codeStandards);
      createLookup(data.componentCollection as Collection, idMap.components);
      createLookup(data.resourceCollection as Collection, idMap.resources);

      setIdLookup(idMap);
      setIsLookupReady(true);
    }
  }, [data, createLookup]);

  return (
    <Router>
      <IdLookupContext.Provider value={idLookup}>
        <NavPrimary />
        {isLookupReady &&
          <div className="app-body">
            <Suspense fallback={<main><p>Loading...</p></main>}>
              <Switch>
                <Route exact path="/">
                  <Redirect to="/content" />
                </Route>
                <Route path="/components" component={ComponentsRouter} />
                <Route path="/resources/developers/code-standards" component={CodeStandardsRouter} />
                <Route path="/content" component={ContentGuidelinesRouter} />
                <Route path="/foundations" component={FoundationsRouter} />
                <Route path="/resources" component={ResourcesRouter} />
              </Switch>
            </Suspense>
          </div>
        }
        <footer className="app-footer">
          <img src={logo} alt="Boston Scientific"/>
        </footer>
      </IdLookupContext.Provider>
    </Router>
  );
}

export default App;
