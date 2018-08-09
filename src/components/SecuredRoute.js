import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class SecuredRoute extends Component {
  render() {
    const { loggedin, path, render, exact } = this.props
    return loggedin ? (
      <Route exact={exact} path={path} render={render} />
    ) : (
      <Redirect to="/login" />
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return authedUser !== '' && authedUser !== null
    ? { loggedin: true }
    : { loggedin: false }
}

export default connect(mapStateToProps)(SecuredRoute)
