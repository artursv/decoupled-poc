import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './Main'
import Home from './Home'

class MainRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/:page"
            component={
              props => <Main {...props} />
            }
          />
          <Route
            path="/"
            component={Home} />
            }
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default MainRouter
