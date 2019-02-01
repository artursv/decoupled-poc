import React from 'react';
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'

import './styles/index.css'
import * as serviceWorker from './serviceWorker'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { HttpLink } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App'

const cache = new InMemoryCache()

const httpLink = new HttpLink({
  uri: 'https://decoupled.lndo.site/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Decoupled accessibility site</title>
    </Helmet>
    <App />
  </ApolloProvider>,  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
