import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home/Home'
import Login from './Auth/Login'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import CreateQuestion from './CreateQuestion/CreateQuestion'
import Poll from './Poll/Poll'
import Question from './Question/Question'

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
              <Route exact path="/question/:id" component={Question} />
              <Route exact path="/question/poll/:id" component={Poll} />
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
