import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Header from './Header'
import Footer from './Footer';
import Article from './Article'
import Page from './Page'
import { Helmet } from "react-helmet";

class Main extends Component {
  render() {
    const { pathname } = this.props.location
    return (
      <Query query={PAGE_QUERY} variables={{ pathname }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error}`;

          const { nid, title } = data.route.entity
          console.log(data.route.entity.entityBundle)
          if (data.route.entity.entityBundle === 'page') {
            return (
              <div className={'container'}>
                <Header/>
                <Page title={title} id={data.route.entity.nid} />
                <Footer/>
              </div>
            )
          }
          else {
            return (
              <div className={'container'}>
                <Helmet>
                  <title>{`${title} | Decoupled accessibility site`}</title>
                </Helmet>
                <Header/>
                <Article title={title} id={data.route.entity.nid} />
                <Footer/>
              </div>
            )
          }
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
            entityBundle
          }
        }
      }
    }
  }
`

export default Main