import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer';
import Node from './Node';

class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Node />
        <Footer/>
      </div>
    )
  }
}

export default Main