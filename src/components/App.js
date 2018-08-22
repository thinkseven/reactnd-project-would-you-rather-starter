import React, { Component, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
              <Route render={() => <h2>404 page not found</h2>} />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/" component={Login} />
              <Redirect to="/" />
            </Switch>
          )}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  function isLoggedIn(user) {
    return user && user.id && user.name ? true : false
  }
  return {
    loggedin: isLoggedIn(authedUser),
  }
}

App.propTypes = {
  loggedin: PropTypes.bool,
}

export default connect(mapStateToProps)(App)
