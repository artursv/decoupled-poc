import React, { Component } from 'react';
import Card from 'reactstrap/es/Card'
import CardBody from 'reactstrap/es/CardBody'
import CardTitle from 'reactstrap/es/CardTitle'
import CardText from 'reactstrap/es/CardText'
import { Markup } from 'interweave'
import CardImg from 'reactstrap/es/CardImg'

class Teaser extends Component {
  render() {
    // console.log(this.props.content)
    const article = this.props.content
    const { fieldImage, title, body, entityUrl } = article
    return(
      <article>
        <Card style={{ marginBottom: '1rem' }}>
          {article && article.fieldImage &&
            <CardImg top width="100%" src={fieldImage.url} alt={fieldImage.alt} />
          }
          <CardBody>
            <CardTitle>
              <h2>{title}</h2>
            </CardTitle>
            <CardText tag="div">
              <Markup content={body.summaryProcessed}/>
            </CardText>
            <a type={'button'} className={'btn btn-outline-primary'} href={entityUrl.path}>Read more</a>
          </CardBody>
        </Card>
      </article>
    )
  }
}

export default Teaser