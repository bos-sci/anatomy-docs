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

const CodeStandardsRouter = lazy(() => import('./codeStandards/CodeStandardsRouter'));
const ComponentsRouter = lazy(() => import('./components/ComponentsRouter'));

export const IdLookupContext = createContext({
  components: {},
  codeStandards: {}
});

function App() {
  const [idLookup, setIdLookup] = useState(null);

  const query = `
    {
      codeStandardCollection {
        items {
          name
          sys {
            id
          }
        }
      }
      componentCollection(order: name_ASC) {
        items {
          name
          sys {
            id
          }
        }
      }
    }
  `;

  const data = useContentful(query);

  useEffect(() => {
    if (data.response) {
      const idMap = {
        codeStandards: {},
        components: {}
      };
      data.response.codeStandardCollection.items.forEach(item => (
        idMap.codeStandards[slugify(item.name)] = {
          id: item.sys.id,
          name: item.name
        })
      );
      data.response.componentCollection.items.forEach(item => (
        idMap.components[slugify(item.name)] = {
          id: item.sys.id,
          name: item.name
        })
      );
      setIdLookup(idMap);
    }
  }, [data.response]);

  return (
    <Router>
      <div className="grid-container">
        <IdLookupContext.Provider value={idLookup}>
          <NavPrimary />
          {idLookup &&
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
          {!idLookup && <p>Loading...</p>}
        </IdLookupContext.Provider>
      </div>
    </Router>
  );
}

export default App;
