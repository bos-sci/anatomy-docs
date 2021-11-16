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
import { CodeStandardCollection, ComponentCollection } from '../types/contentful';
import { IdLookup } from '../types/docs';

const CodeStandardsRouter = lazy(() => import('./codeStandards/CodeStandardsRouter'));
const ComponentsRouter = lazy(() => import('./components/ComponentsRouter'));

export const IdLookupContext = createContext({
  components: {},
  codeStandards: {}
});

interface IData {
  response?: {
    codeStandardCollection: CodeStandardCollection;
    componentCollection: ComponentCollection;
  };
  error?: unknown
}

function App() {
  const [idLookup, setIdLookup] = useState<IdLookup>({} as IdLookup);
  const [isLookupReady, setIsLookupReady] = useState(false);

  const shouldGetPreview = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
  const query = `
    {
      codeStandardCollection(, preview: ${shouldGetPreview}) {
        items {
          name
          sys {
            id
          }
        }
      }
      componentCollection(order: name_ASC, preview: ${shouldGetPreview}) {
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
        codeStandards: {},
        components: {}
      };
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
      setIdLookup(idMap);
      setIsLookupReady(true);
    }
  }, [data.response]);

  return (
    <Router>
      <div className="grid-container">
        <IdLookupContext.Provider value={idLookup}>
          <NavPrimary />
          {isLookupReady &&
            <div className="container-fluid container-lg app-body">
              <div className="row">
                <div className="col-12 col-lg-9 col-xl-10">
                  <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                      <Route exact path="/">
                        <Redirect to="/components" />
                      </Route>
                      <Route path="/components" component={ComponentsRouter} />
                      <Route path="/code-standards" component={CodeStandardsRouter} />
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
