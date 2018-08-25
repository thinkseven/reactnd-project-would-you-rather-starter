import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading'
import Login from './Auth/Login'
import Home from './Home/Home'
import Question from './Question/Question'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import CreateQuestion from './CreateQuestion/CreateQuestion'

class App extends Component {
  render() {
    const { loggedin } = this.props
    return (
      <Fragment>
        <LoadingBar />
        {loggedin ? (
          <Router>
            <Fragment>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={CreateQuestion} />
                <Route
                  exact
                  path="/question/:question_id"
                  component={Question}
                />
                <Route exact path="/leaderboard" component={LeaderBoard} />
                <Route
                  render={() => (
                    <div className="w3-panel w3-red w3-card-4">
                      <h1>404</h1>
                      <h3>oops! page not found</h3>
                    </div>
                  )}
                />
              </Switch>
            </Fragment>
          </Router>
        ) : (
          <Login />
        )}
      </Fragment>
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
