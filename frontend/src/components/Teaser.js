import React, { Component } from 'react';
import Card from 'reactstrap/es/Card'
import CardBody from 'reactstrap/es/CardBody'
import CardTitle from 'reactstrap/es/CardTitle'
import CardText from 'reactstrap/es/CardText'
import { Markup } from 'interweave'
import CardImg from 'reactstrap/es/CardImg'

class Teaser extends Component {
  render() {
    console.log(this.props.content)
    const article = this.props.content
    return(
      <article>
        <Card style={{ marginBottom: '1rem' }}>
          {(() => {
            if (article.fieldImage != null) {
              console.log(article.fieldImage)
              return <CardImg top width="100%" src={article.fieldImage.url} alt="Card image cap" />
            }
          })()}
          <CardBody>
            <CardTitle>
              <h3>{article.title}</h3>
            </CardTitle>
            <CardText>
              <Markup content={article.body.summaryProcessed}/>
            </CardText>
            <a type={'button'} className={'btn btn-outline-primary'} href={article.entityUrl.path}>Read more</a>
          </CardBody>
        </Card>
      </article>
    )
  }
}

export default Teaser