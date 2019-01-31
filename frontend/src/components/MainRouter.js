import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './Main'

class MainRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          {/*<Route exact="/" component="" /> */}
          <Route
            path="/:page"
            component={
              props => <Main {...props} />
            }
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default MainRouter
