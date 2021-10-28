import { useState, useEffect } from 'react';
import Content from './content';
import NavSecondary from '../shared/nav-secondary/nav-secondary';

import useContentful from '../../hooks/useContentful';

const Components = (props) => {
  const basePath = props.match.path.slice(0, props.match.path.lastIndexOf('/'));
  const component = props.match.params.component;
  let [nameToId, setNameToId] = useState(null);
  let [navItems, setNavItems] = useState(null);

  const query = `
    query {
      componentCollection(order: name_ASC) {
        items {
          name
          sys {
            id
          }
        }
      }
    }`;


  const data = useContentful(query);

  useEffect(() => {
    if (data.error) {
      console.error(data.error);
    }
    if (data.response) {
      const slugify = (text) => {
        return text
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      }

      const idMap = {};
      data.response.data.componentCollection.items.forEach(entry => idMap[slugify(entry.name)] = entry.sys.id);
      const navItems = data.response.data.componentCollection.items.map(item => ({
        text: item.name,
        slug: basePath + '/' + slugify(item.name)
      }));
      setNavItems(navItems);
      setNameToId(idMap);
    }
  }, [data.response, data.error, basePath]);

  return (
    <div>
      { navItems && <NavSecondary navItems={navItems} /> }
      { (nameToId && component) && <Content nameToId={nameToId} component={component} /> }
    </div>
  );
}

export default Components;