import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
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
            <i className="fas fa-sign-out-alt" />
            Logout
          </button>
        </div>
      </div>
    )
  }
}

Logout.propTypes = {
  name: PropTypes.string.isRequired,
  avatarURL: PropTypes.string.isRequired,
}

const mapStateToProps = ({ authedUser }) => {
  const { name, avatarURL } = authedUser
  return {
    name,
    avatarURL,
  }
}

export default connect(mapStateToProps)(Logout)
