import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Actions from './Actions'
import { Markup } from 'interweave';

const article = gql`
query ($id: String!){
  nodeById(id: $id) {
    ...on NodePage {
      title,
      body {
        processed
      }
    }
  }
}`

class Page extends Component {
  render() {
    const id = this.props.id
    console.log(id)
    return(
      <section id={'main-content'}>
        <Query variables={{ id }} query={article}>
          {({ loading, error, data }) => {
            console.log(id)
            if (loading) return 'Loading...';
            if (error) return `Error! ${error}`;
            return (
              <div>
                <h1>{data.nodeById.title}</h1>
                <Actions id={id}/>
                <Markup content={data.nodeById.body.processed}/>
              </div>
            )
          }}
        </Query>
      </section>
    )
  }
}


export default Page