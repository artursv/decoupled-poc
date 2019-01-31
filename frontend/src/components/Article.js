import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const article = gql`
query {
  nodeById(id: "1") {
    title
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
              {data.nodeById.title}
            </div>
          );
        }}
      </Query>
    )
  }
}

export default Article