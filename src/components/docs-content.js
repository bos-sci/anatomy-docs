import React from 'react';
import DocsComponent from './docs-component';

import { useEffect, useState } from 'react';

const DocsContent = ( props ) => {

  let [componentData, setComponentData] = useState(null);

  useEffect(() => {
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

    const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}?access_token=${process.env.REACT_APP_CONTENTFUL_TOKEN}&query=${query}&variables=${JSON.stringify(queryVariables)}`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => setComponentData(data.data));

  },[props])

  return (
    <>
      { componentData && <h1>{componentData.component.name}</h1> }
      <DocsComponent component={props.component} />
    </>
  );

}

export default DocsContent;