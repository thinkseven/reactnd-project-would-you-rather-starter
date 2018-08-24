import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logout } from '../../actions/authentication'
import { resetUsers } from '../../actions/users'
import { resetQuestions } from '../../actions/questions'
import './Auth.css'

class Logout extends PureComponent {
  handleLogout = event => {
    const { dispatch, history } = this.props
    dispatch(logout())
    dispatch(resetUsers())
    dispatch(resetQuestions())
    history.push('/')
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

export default withRouter(connect(mapStateToProps)(Logout))
