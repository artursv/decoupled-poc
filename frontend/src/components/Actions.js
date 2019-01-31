import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Actions extends Component {
  render() {
    return(
      <section>
        <div className="btn-group" role="group" aria-label="Article administration actions">
        <a type={'button'} className={'btn btn-primary'} href={"https://decoupled.lndo.site/node/"+ this.props.id +"/edit"}>Edit</a>
        <a type={'button'} className={'btn btn-primary'} href={"https://decoupled.lndo.site/node/"+ this.props.id +"/delete"}>Delete</a>
        </div>
      </section>
    )
  }
}

export default Actions