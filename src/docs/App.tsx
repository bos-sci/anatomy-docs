import { useState, useEffect, createContext, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { slugify } from './helpers';
import useContentful from '../hooks/useContentful';
import NavPrimary from './shared/navPrimary/NavPrimary';
import { CodeStandardCollection, ComponentCollection, ContentGuidelineCollection, FoundationCollection, ResourceCollection } from '../types/contentful';
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

interface IData {
  response?: {
    contentGuidelineCollection: ContentGuidelineCollection;
    codeStandardCollection: CodeStandardCollection;
    componentCollection: ComponentCollection;
    foundationCollection: FoundationCollection;
    resourceCollection: ResourceCollection;
  };
  error?: unknown
}

function App() {
  const [idLookup, setIdLookup] = useState<IdLookup>({} as IdLookup);
  const [isLookupReady, setIsLookupReady] = useState(false);

  const query = `
    {
      foundationCollection(order: name_ASC, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        items {
          name
          sys {
            id
          }
        }
      }
      contentGuidelineCollection(order: name_ASC, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        items {
          name
          sys {
            id
          }
        }
      }
      codeStandardCollection(preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        items {
          name
          sys {
            id
          }
        }
      }
      componentCollection(order: name_ASC, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        items {
          name
          sys {
            id
          }
        }
      }
      resourceCollection(order: name_ASC, preview: ${process.env.REACT_APP_CONTENTFUL_PREVIEW}) {
        items {
          name
          sys {
            id
          }
        }
      }
    }
  `;

  const data: IData = useContentful(query);

  useEffect(() => {
    if (data.response) {
      const idMap: IdLookup = {
        foundations: {},
        contentGuidelines: {},
        codeStandards: {},
        components: {},
        resources: {}
      };
      data.response.foundationCollection.items.forEach((item) => (
        idMap.foundations[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.response.contentGuidelineCollection.items.forEach((item) => (
        idMap.contentGuidelines[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.response.codeStandardCollection.items.forEach((item) => (
        idMap.codeStandards[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.response.componentCollection.items.forEach((item) => (
        idMap.components[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      data.response.resourceCollection.items.forEach((item) => (
        idMap.resources[slugify(item?.name as string)] = {
          id: item?.sys.id as string,
          name: item?.name as string
        })
      );
      setIdLookup(idMap);
      setIsLookupReady(true);
    }
  }, [data.response]);

  return (
    <Router>
      <div className="grid-container">
        {process.env.REACT_APP_CONTENTFUL_PREVIEW &&
          <button className="ads-button-subtle clear-storage" onClick={() => sessionStorage.clear()}>Clear Session</button>
        }
        <IdLookupContext.Provider value={idLookup}>
          <NavPrimary />
          {isLookupReady &&
            <div className="container-fluid container-lg app-body">
              <div className="row">
                <div className="col-12 col-lg-9 col-xl-10">
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
              </div>
            </div>
          }
        </IdLookupContext.Provider>
      </div>
    </Router>
  );
}

export default App;
