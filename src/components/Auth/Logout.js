import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/authentication'
import './Auth.css'

class Logout extends PureComponent {
  handleLogout = event => {
    this.props.dispatch(logout())
  }

  render() {
    const { name, avatarURL } = this.props
    return (
      <div className="logout">
        <div>
          <img className="avatar" src={avatarURL} alt={name} />
        </div>
        <div className="username">
          <span>Hello, {`${name}`}</span>
        </div>
        <div className="logoutBtn">
          <button onClick={this.handleLogout}>
            <i class="fas fa-sign-out-alt" />
            Logout
          </button>
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
