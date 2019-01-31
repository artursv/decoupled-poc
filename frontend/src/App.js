import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost'
import {ApolloProvider, Query} from 'react-apollo'
import ggl from "graphql-tag"
import Main from './components/Main'

const client = new ApolloClient({
  uri: "https://local.decoupled.com/graphql"
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Main classname="App" />
      </ApolloProvider>
    );
  }
}

export default App;
