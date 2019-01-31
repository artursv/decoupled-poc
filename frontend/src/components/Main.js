import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Header from './Header'
import Footer from './Footer';
import Node from './Node';

class Main extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <Query query={PAGE_QUERY} variables={{ pathname }}>
        {({ loading, error, data }) => {console.log(error)
          if (loading) return 'Loading...';
          if (error) return `Error! ${error}`;
          console.log(data)
          const { nid, title } = data.route.entity
          return (
            <div>
              <Header/>
              <Node title={title} />
              <Footer/>
            </div>
          )
        }}
      </Query>
    )
  }
}

const PAGE_QUERY = gql`
  query ContentByPath($pathname: String!) {
    route:route(path: $pathname) {
      ... on EntityCanonicalUrl {
        entity {
          ... on Node {
            nid
            title
          }
        }
      }
    }
  }
`

export default Main