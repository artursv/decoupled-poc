import React, { Component } from 'react';
import Navbar from 'reactstrap/es/Navbar'
import Nav from 'reactstrap/es/Nav'
import NavLink from 'reactstrap/es/NavLink'
import NavbarBrand from 'reactstrap/es/NavbarBrand'

class Navigation extends Component {
  render() {
    return(
      <Navbar bg="dark">
        <NavbarBrand href="#home">Innovation day</NavbarBrand>
        <Nav className="mr-auto">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#link">Link</NavLink>
          <NavLink href="https://decoupled.lndo.site">Edit content</NavLink>
        </Nav>
      </Navbar>
    )
  }
}

export default Navigation