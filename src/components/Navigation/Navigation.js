import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from '../Auth/Logout'
//import Header from './Header/Header'
import './Navigation.css'

class Navigation extends Component {
  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  handleTab = () => {
    var x = document.getElementById('myTopnav')
    if (x.className === 'topnav') {
      x.className += ' responsive'
    } else {
      x.className = 'topnav'
    }
  }

  render() {
    const { name, avatarURL } = this.props
    return (
      <Fragment>
        <div className="navigation">
          <div className="topnav" id="myTopnav">
            <Link to="/">Home</Link>
            <Link to="/question/create">New Question</Link>
            <Link to="/leaderboard">Leader Board</Link>
            <a className="icon" onClick={this.handleTab}>
              <i className="fa fa-bars" />
            </a>
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
