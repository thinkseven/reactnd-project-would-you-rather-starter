import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Auth/Login'
import LeaderBoard from './LeaderBoard'
import CreateQuestion from './CreateQuestion'

class App extends Component {
  render() {
    const { loggedin } = this.props
    return (
      <Router>
        <Fragment>
          {loggedin ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/question/create" component={CreateQuestion} />
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
              <Route exact path="/leaderboard" component={LeaderBoard} />
              <Route render={() => <h2>404 page not found</h2>} />{' '}
            </Switch>
          ) : (
            <Switch>
              <Route path="/" component={Login} />
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
