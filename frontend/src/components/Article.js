import React, { Component } from 'react';
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import Actions from './Actions'
import { Markup } from 'interweave';
import CardImg from './Teaser'

const article = gql`
query ($id: String!){
  nodeById(id: $id) {
    ...on NodeArticle {
      title,
      body {
        processed
      }
      fieldImage {
        alt
        title
        url
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
                {(() => {
                  if (data.nodeById.fieldImage != null) {
                   return ( <div>
                      <img src={data.nodeById.fieldImage.url} alt={data.nodeById.fieldImage.alt} className="img-fluid" />
                    </div>
                   )
                  }
                })()}
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


export default Article