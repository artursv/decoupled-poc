import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'

class Home extends Component {
  render() {
    return(
      <div className={'container'}>
        <Header/>
        <p>Hello world</p>
        <Footer/>
      </div>
    )
  }
}

export default Home