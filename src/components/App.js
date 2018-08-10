import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'

class App extends Component {
  render() {
    const { loggedin } = this.props
    return (
      <Router>
        <Fragment>
          {loggedin ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/question/create"
                render={() => <div>Create New Question</div>}
              />
              <Route
                exact
                path="/question/:id"
                render={() => <div>Submit Question Answer</div>}
              />
              <Route
                exact
                path="/question/poll/:id"
                render={() => <div>Question Poll View</div>}
              />
              <Route
                exact
                path="/leaderboard"
                render={() => <div>Leader Board</div>}
              />
              <Route render={() => <h2>404 page not found</h2>} />{' '}
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/login" render={() => <div>Login</div>} />
              <Redirect to="/login" />
            </Switch>
          )}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loggedin: authedUser !== null && authedUser !== '',
  }
}

export default connect(mapStateToProps)(App)
