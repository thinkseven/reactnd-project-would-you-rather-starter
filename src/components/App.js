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
import LoadingBar from 'react-redux-loading'

class App extends Component {
  render() {
    const { loggedin } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {loggedin ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={CreateQuestion} />
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
  return {
    loggedin: authedUser && authedUser.id && authedUser.name ? true : false,
  }
}

App.propTypes = {
  loggedin: PropTypes.bool,
}

export default connect(mapStateToProps)(App)
