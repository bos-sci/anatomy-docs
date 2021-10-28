import { useState, useEffect } from 'react';

function useContentful(query, variables = {}) {

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const vars = Object.keys(variables).length !== 0 ? JSON.stringify(variables) : '';

  useEffect(() => {
    let endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}?access_token=${process.env.REACT_APP_CONTENTFUL_TOKEN}`

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
        setResponse(JSON.parse(sessionStorage.getItem(params)));
      } else {
        // If no data in session storage, fetch data and write to storage
        try {
          const res = await fetch(endpoint);
          const data = await res.json();
          sessionStorage.setItem(params, JSON.stringify(data));
          setResponse(data.data);
        } catch(e) {
          setError(e);
        }
      }
    }
    getData();
  }, [query, vars]);

  return {response, error};
}

export default useContentful;