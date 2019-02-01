import React  from 'react'
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
        fieldImage {
          alt
          title
          url
        }
      }
    }
  }
}`

const Home = () => (
  <Query query={ARTICLE_QUERY}>
    {({data, loading, error}) => {
      if (loading) return 'Loading...';
      if (error) return `Error! ${error}`;
      const teaserList = data.nodeQuery.entities.map(
      (value, key) => <Teaser key={key} content={value}/>
      );

      console.log(data)
      return (
        <div className={'container'}>
          <Header/>
          <div className={'main-content'} id={'main-content'} role="main">
            <h1>List</h1>
            {teaserList}
          </div>
          <Footer/>
        </div>
        )
    }}
  </Query>
)

export default Home