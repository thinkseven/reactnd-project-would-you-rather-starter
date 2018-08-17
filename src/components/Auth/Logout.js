import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authentication'
import './Auth.css'

class Logout extends Component {
  handleLogout = event => {
    this.props.dispatch(logout())
  }

  render() {
    const { name, avatarURL } = this.props
    return (
      <div>
        <div>
          <img className="avatar" src={avatarURL} alt={name} />
        </div>
        <div className="hello">
          <span>Hello, {`${name}`}</span>
        </div>
        <div>
          <a onClick={this.handleLogout}>Logout</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.users[state.authedUser].name,
    avatarURL: state.users[state.authedUser].avatarURL,
  }
}

export default connect(mapStateToProps)(Logout)
