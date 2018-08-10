import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Auth/Logout'

class Navigation extends Component {
  render() {
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
          <li>Hello, Tyler McGinnis</li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    )
  }
}

export default connect()(Navigation)
