import React, { Component } from 'react'
import styled from 'styled-components'

const SkipLink = styled.a`
  left: 0;
  position: absolute;
  text-decoration: none;
  top: -9999rem;

  &:focus {
    top: 0;
  }
`

class SkipToContent extends Component {
  render() {
    return(
     <span><SkipLink href="#main-content" className={"badge badge-info"}>Skip to content</SkipLink></span>
    )
  }
}

export default SkipToContent