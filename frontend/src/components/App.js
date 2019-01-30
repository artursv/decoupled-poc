import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const articles = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["article"]}]}) {    entities {
      ... on NodeArticle {
        nid
        title
      }
    }
  }
}`

const App = () => (
  <Query query={articles}>
    {({ loading, error, data }) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error}`;

      const nodeList = data.nodeQuery.entities.map((d) => <li key={d.nid}>{d.title}</li>);

      return (
        <div>
          {nodeList }
        </div>
      );
    }}
  </Query>
)

export default App;