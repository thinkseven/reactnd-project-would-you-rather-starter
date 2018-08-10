import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authentication'

class Logout extends Component {
  handleLogout = event => {
    this.props.dispatch(logout())
  }

  render() {
    return (
      <button type="button" onClick={this.handleLogout}>
        Logout
      </button>
    )
  }
}

export default connect()(Logout)
