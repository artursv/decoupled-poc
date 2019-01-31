import React, { Component } from 'react';
import Navbar from 'reactstrap/es/Navbar'
import Nav from 'reactstrap/es/Nav'
import NavLink from 'reactstrap/es/NavLink'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

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
          console.log(data)
          const linkList = data.menuByName.links.map((d) => <NavLink key={d.url.path} href={d.url.path}>{d.label}</NavLink>);
          return (
            <section>
              <Navbar bg='dark'>
                <Nav className="mr-auto">
                  {linkList }
                </Nav>
              </Navbar>
            </section>
          )
        }}
      </Query>
    )
  }
}
export default Navigation