import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authentication'
import './Auth.css'

class Logout extends Component {
  handleLogout = event => {
    this.props.dispatch(logout())
  }

  render() {
    return <a onClick={this.handleLogout}>Logout</a>
  }
}

export default connect()(Logout)
