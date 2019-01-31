import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const article = gql`
query {
  nodeById(id: "495") {
    ...on NodeArticle {
      title,
      body {
        processed
      }
    }
  }
}`

class Article extends Component {
  render() {
    return(
      <Query query={article}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error}`;
          return (
            <div>
              <h1>{data.nodeById.title}</h1>
              {data.nodeById.body.processed}
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Article