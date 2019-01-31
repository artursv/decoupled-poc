import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { gql } from 'apollo-boost'
import Query from 'react-apollo/Query'
import Teaser from './Teaser'

const ARTICLE_QUERY = gql`
query {
  nodeQuery(limit: 10, offset: 0, filter: {conditions: [{operator: EQUAL, field: "type", value: ["article"]}]}) {    entities {
      ... on NodeArticle {
        nid
        title
        entityUrl {
          path
          routed
        }
        body {
          processed
          summaryProcessed
        }
      }
    }
  }
}`

class Home extends Component {
  render() {
    return(
      <Query query={ARTICLE_QUERY}>
        {({data, loading, error}) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error}`;
          const teaserList = data.nodeQuery.entities.map((d) => <Teaser content={d}/>);

          console.log(data)
          return (
            <div className={'container'}>
              <Header/>
              <div className={'main-content'} id={'main-content'}>
                {teaserList}
              </div>
              <Footer/>
            </div>
            )
        }}
      </Query>
    )
  }
}

export default Home