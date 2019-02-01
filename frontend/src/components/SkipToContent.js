import React, { Component } from 'react'
import styled from 'styled-components'

const SkipLink = styled.a`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
`

class SkipToContent extends Component {
  render() {
    return(
     <span><SkipLink href="#main-content" className={"badge badge-info"}>Skip to content</SkipLink></span>
    )
  }
}

export default SkipToContent