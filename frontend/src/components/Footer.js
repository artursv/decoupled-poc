import React, { Component } from 'react';
import styled from 'styled-components';

const FooterLink = styled.a`
  color: #000;
`

class Footer extends Component {
  render() {
    return(
      <section>
        <footer className="page-footer font-small blue">
          <div className="footer-copyright text-center py-3">© 2019
            <FooterLink href="https://wunder.io"> Wunder</FooterLink>
          </div>
        </footer>
      </section>
    )
  }
}

export default Footer