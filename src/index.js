import React from 'react';
import { render } from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './App';

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI
  }),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV === 'development',
  dataIdFromObject: o => o.id
});

const target = document.querySelector('#root');

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  target
);
