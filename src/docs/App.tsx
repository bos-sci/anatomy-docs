import { useState, useEffect, createContext, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { slugify } from './helpers';
import NavPrimary from './shared/navPrimary/NavPrimary';
import {  useGetCollectionsQuery } from '../types/contentful';
import { IdLookup } from '../types/docs';

const CodeStandardsRouter = lazy(() => import('./codeStandards/CodeStandardsRouter'));
const ComponentsRouter = lazy(() => import('./components/ComponentsRouter'));
const ContentGuidelinesRouter = lazy(() => import('./contentGuidelines/ContentGuidelinesRouter'));
const FoundationsRouter = lazy(() => import('./foundations/FoundationsRouter'));
const ResourcesRouter = lazy(() => import('./resources/ResourcesRouter'));

export const IdLookupContext = createContext({
  contentGuidelines: {},
  components: {},
  codeStandards: {},
  foundations: {},
  resources: {}
});

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

  useEffect(() => {
    if (data) {
      const idMap: IdLookup = {
        foundations: {},
        contentGuidelines: {},
        codeStandards: {},
        components: {},
        resources: {}
      };
      data.foundationCollection?.items.forEach((item) => (
        idMap.foundations[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.contentGuidelineCollection?.items.forEach((item) => (
        idMap.contentGuidelines[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.codeStandardCollection?.items.forEach((item) => (
        idMap.codeStandards[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.componentCollection?.items.forEach((item) => (
        idMap.components[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.resourceCollection?.items.forEach((item) => (
        idMap.resources[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      setIdLookup(idMap);
      setIsLookupReady(true);
    }
  }, [data]);

  const clearSession = () => {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <Router>
      <div className="grid-container">
        {process.env.REACT_APP_CONTENTFUL_PREVIEW === 'true' &&
          <button className="ads-button-subtle clear-storage" onClick={clearSession}>Clear Session</button>
        }
        <IdLookupContext.Provider value={idLookup}>
          <NavPrimary />
          {isLookupReady &&
            <div className="app-body">
              <Suspense fallback={<p>Loading...</p>}>
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/content" />
                  </Route>
                  <Route path="/components" component={ComponentsRouter} />
                  <Route path="/code-standards" component={CodeStandardsRouter} />
                  <Route path="/content" component={ContentGuidelinesRouter} />
                  <Route path="/foundations" component={FoundationsRouter} />
                  <Route path="/resources" component={ResourcesRouter} />
                </Switch>
              </Suspense>
            </div>
          }
        </IdLookupContext.Provider>
      </div>
    </Router>
  );
}

export default App;
