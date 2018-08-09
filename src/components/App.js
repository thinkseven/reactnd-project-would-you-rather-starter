import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SecuredRoute from './SecuredRoute'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path="/login" render={() => <div>Login</div>} />
            <SecuredRoute path="/" exact render={() => <div>Home</div>} />
            <SecuredRoute
              path="/question/create"
              render={() => <div>Create New Question</div>}
            />
            <SecuredRoute
              exact
              path="/question/:id"
              render={() => <div>Submit Question Answer</div>}
            />
            <SecuredRoute
              exact
              path="/question/poll/:id"
              render={() => <div>Question Poll View</div>}
            />
            <SecuredRoute
              path="/leaderboard"
              render={() => <div>Leader Board</div>}
            />
            <SecuredRoute render={() => <h2>404 page not found</h2>} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App
