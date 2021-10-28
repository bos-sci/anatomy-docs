import React, { useEffect, useState } from 'react';
import Preview from './preview';
import ReactMarkdown from 'react-markdown';

import useContentful from '../../hooks/useContentful';

const Content = ( props ) => {
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
  if (data.error) console.error(data.error);

  useEffect(() => {
    setComponentData(data.response);
  }, [data.response]);

  return (
    <main>
      { componentData && <>
        <h1>{componentData.data.component.name}</h1>
        <dl>
          <dt>Last Updated</dt>
          <dd>{new Date(componentData.data.component.sys.publishedAt).toLocaleDateString()}</dd>
        </dl>
        <ReactMarkdown children={componentData.data.component.description} />
      </>}
      <div className="demo-example">
        <Preview component={props.component} />
      </div>
    </main>
  );

}

export default Content;