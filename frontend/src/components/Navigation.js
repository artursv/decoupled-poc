import React, { Component } from 'react';
import Navbar from 'reactstrap/es/Navbar'
import Nav from 'reactstrap/es/Nav'
import NavLink from 'reactstrap/es/NavLink'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import styled from 'styled-components';

const NavLinkItem = styled.a`
  color: #fff;
`

const NavigationBar = styled.div`
  background: #000;
  padding: 5px 10px;
`

const MENU_QUERY = gql`
query {
  menuByName(name: "main") {
    links {
      description
      expanded
      label
      url {
        path
        routed
      }
    }
  }
}
`

class Navigation extends Component {
  render() {
    return(
      <Query query={MENU_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error}`;
          const linkList = data.menuByName.links.map((value, key) =>
            <li key={key}>
              <NavLinkItem key={key} href={value.url.path}>
                {value.label}
              </NavLinkItem>
            </li>
          )
          return (
            <section>
              <NavigationBar>
                <Nav className="mr-auto">
                  {linkList}
                </Nav>
              </NavigationBar>
            </section>
          )
        }}
      </Query>
    )
  }
}
export default Navigation