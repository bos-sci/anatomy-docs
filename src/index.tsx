import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Utilize the environment variables defined in the `.env` file
const {
  REACT_APP_CONTENTFUL_SPACE_ID: SPACE_ID,
  REACT_APP_CONTENTFUL_ENVIRONMENT: ENVIRONMENT,
  REACT_APP_CONTENTFUL_TOKEN: API_KEY
} = process.env;

export const apolloClient = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`,
  headers: {
    Authorization: `Bearer ${API_KEY}`
  },
  cache: new InMemoryCache()
});

const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
