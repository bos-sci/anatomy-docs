import { useState, useEffect, useContext } from 'react';
import Preview from './preview';
import NavSecondary from '../shared/nav-secondary/nav-secondary';
import useContentful from '../../hooks/useContentful';
import { slugify } from '../helpers';
import { IdLookupContext } from '../App';
import DOMPurify from 'dompurify';
import marked from 'marked';

const Components = (props) => {
  const component = props.match.params.component;
  const idLookup = useContext(IdLookupContext);
  let [navItems, setNavItems] = useState(null);
  let [componentData, setComponentData] = useState(null);

  const query = `
    query ComponentData($id: String!) {
      component(id: $id) {
        name
        description
        sys {
          id
          publishedAt
        }
      }
    }`;

  const queryVariables = {
    id: idLookup.components[component]
  };

  const data = useContentful(query, queryVariables);
  if (data.error) console.error(data.error);

  useEffect(() => {
    if(data.response && data.response.data) {
      setComponentData(data.response.data.component);
      const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
      const navItems = Object.keys(idLookup.components).map(name => ({
        text: name,
        slug: basePath + '/' + slugify(name)
      }));
      setNavItems(navItems);
    }
  }, [data.response, idLookup, props.match.path]);

  return (
    <div className="app-body">
      { navItems && <NavSecondary navItems={navItems} /> }
      <main>
        { componentData &&
          <>
            <h1>{componentData.name}</h1>
            <dl>
              <dt>Last Updated</dt>
              <dd>{new Date(componentData.sys.publishedAt).toLocaleDateString()}</dd>
            </dl>
            <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(marked(componentData.description))}} />
          </>
        }
        <div className="demo-example">
          <Preview component={component} />
        </div>
      </main>
  </div>);
}

export default Components;