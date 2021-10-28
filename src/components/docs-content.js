import React, { useEffect, useState } from 'react';
import DocsComponent from './docs-component';

import useContentful from '../hooks/useContentful';

const DocsContent = ( props ) => {

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
    id: props.nameToId[props.component]
  };

  const data = useContentful(query, queryVariables);

  useEffect(() => {
    setComponentData(data.response);
  }, [data]);

  return (
    <>
      { componentData && <h1>{componentData.component.name}</h1> }
      <DocsComponent component={props.component} />
    </>
  );

}

export default DocsContent;