import React, { Component } from 'react';
import Navigation from './Navigation'
import Branding from './Branding'

class Header extends Component {
  render() {
    return(
      <header className="App-header">
        <Navigation/>
      </header>
    )
  }
}

export default Header