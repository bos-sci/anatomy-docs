import { useState, useEffect } from 'react';

interface Res {
  response?: any;
  error?: any;
}

function useContentful(query: string, variables?: {[key: string]: any}): Res {

  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState(undefined);
  let vars = '';
  if (variables && Object.keys(variables).length !== 0) {
    vars = JSON.stringify(variables);
  }

  useEffect(() => {
    let endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/environments/${process.env.REACT_APP_CONTENTFUL_ENVIRONMENT}?access_token=${process.env.REACT_APP_CONTENTFUL_TOKEN}`

    // Build query params string
    let params = '';
    if(query) {
      params += `&query=${query}`;
    }
    if (vars) {
      params += `&variables=${vars}`;
    }
    endpoint += params;

    const getData = async () => {
      if (sessionStorage.getItem(params)) {
        // Check for and pull data from session storage
        setResponse(JSON.parse(sessionStorage.getItem(params) || '{}'));
      } else {
        // If no data in session storage, fetch data and write to storage
        try {
          const res = await fetch(endpoint);
          const data = await res.json();
          sessionStorage.setItem(params, JSON.stringify(data.data));
          setResponse(data.data);
        } catch(e: any) {
          setError(e);
        }
      }
    }
    getData();
  }, [query, vars]);

  return {response, error};
}

export default useContentful;