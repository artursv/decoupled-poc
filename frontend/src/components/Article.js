import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

const article = gql`
query ($id: String!){
  nodeById(id: $id) {
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
    const id = this.props.id
    console.log(id)
    return(
      <section>
        <Query variables={{ id }} query={article}>
          {({ loading, error, data }) => {
            console.log(id)
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
      </section>
    )
  }
}


export default Article