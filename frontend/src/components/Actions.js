import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const ActionLink = styled.a`
  color: #000;
`

class Actions extends Component {
  render() {
    return(
      <section>
        <div className="btn-group" role="group" aria-label="Article administration actions">
        <ActionLink type={'button'} className={'btn btn-primary'} href={"https://decoupled.lndo.site/node/"+ this.props.id +"/edit"}>Edit</ActionLink>
        <ActionLink type={'button'} className={'btn btn-primary'} href={"https://decoupled.lndo.site/node/"+ this.props.id +"/delete"}>Delete</ActionLink>
        </div>
      </section>
    )
  }
}

export default Actions