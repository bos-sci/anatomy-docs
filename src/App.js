import './App.css';
import DocsContent from './components/docs-content';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {

  let [nameToId, setNameToId] = useState(null);

  useEffect(() => {
    const query = `
      query {
        componentCollection {
          items {
            name
            sys {
              id
            }
          }
        }
      }`;

    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}?access_token=${process.env.REACT_APP_CONTENTFUL_TOKEN}&query=${query}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        const idMap = {};
        data.data.componentCollection.items.forEach(entry => idMap[entry.name.toLowerCase()] = entry.sys.id);
        setNameToId(idMap)
      })
  },[])

  return (
    <Router>
      <ul>
        <li>
          <Link to="/breadcrumbs">Breadcrumbs</Link>
        </li>
        <li>
          <Link to="/call-to-action">Call to Action</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/breadcrumbs">
          {nameToId && <DocsContent component="breadcrumbs" nameToId={nameToId} /> }
        </Route>
        <Route path="/call-to-action">
          {nameToId && <DocsContent component="call to action" nameToId={nameToId} />}
        </Route>
        <Route path="/">
          <p>Testing conditional imports.</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
