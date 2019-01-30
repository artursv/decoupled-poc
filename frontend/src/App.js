import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost'
import {ApolloProvider, Query} from 'react-apollo'
import ggl from "graphql-tag"

const client = new ApolloClient({
  uri: "https://local.decoupled.com/graphql"
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            Hello world!
          </p>
          <ApolloProvider client={client}>
            <div>
              <h3>THis is an Apollo App</h3>

            </div>
          </ApolloProvider>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
