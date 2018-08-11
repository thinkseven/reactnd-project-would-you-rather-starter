import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Auth/Logout'

class Navigation extends Component {
  render() {
    const { name } = this.props
    return (
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>
            <Link to="/question/create">New Question</Link>
          </li>
          <li>
            <Link to="/question/create">New Question</Link>
          </li>
          <li>Hello, {`${name}`}</li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.users[state.authedUser].name,
  }
}

export default connect(mapStateToProps)(Navigation)
