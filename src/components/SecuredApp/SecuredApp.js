import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import Logout from '../Auth/Logout'
import Home from '../Home/Home'
import Question from '../Question/Question'
import LeaderBoard from '../LeaderBoard/LeaderBoard'
import CreateQuestion from '../CreateQuestion/CreateQuestion'
import { getPostAuthData } from '../../actions/shared'

class SecuredApp extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getPostAuthData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navigation />
          <Logout />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={CreateQuestion} />
            <Route exact path="/question/:question_id" component={Question} />
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
    )
  }
}

export default connect()(SecuredApp)
