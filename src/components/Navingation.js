import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Auth/Logout'
import Header from './Header/Header'

class Navigation extends Component {
  render() {
    const { name, avatarURL } = this.props
    return (
      <Fragment>
        <Header />
        <div className="navigation">
          <div className="content-left">
            <Link to="/">Home</Link>
            <Link to="/question/create">New Question</Link>
            <Link to="/leaderboard">Leader Board</Link>
          </div>
          <div className="content-right">
            <div className="item">
              <p>Hello, {`${name}`}</p>
            </div>
            <div className="item">
              <img src={avatarURL} alt={name} />
            </div>
            <div className="item">
              <Logout />
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.users[state.authedUser].name,
    avatarURL: state.users[state.authedUser].avatarURL,
  }
}

export default connect(mapStateToProps)(Navigation)
