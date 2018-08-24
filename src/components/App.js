import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LoadingBar from 'react-redux-loading'
import Login from './Auth/Login'
import SecuredApp from './SecuredApp/SecuredApp'

class App extends Component {
  render() {
    const { loggedin } = this.props
    return (
      <Fragment>
        <LoadingBar />
        {loggedin ? <SecuredApp /> : <Login />}
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
