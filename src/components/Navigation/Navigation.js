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
        <div className="topnav" id="myTopnav">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/question/create">New Question</Link>
          </div>
          <div>
            <Link to="/leaderboard">Leader Board</Link>
          </div>
          <div>
            <span>Hello, {`${name}`}</span>
          </div>
          <div>
            <img className="avatar" src={avatarURL} alt={name} />
          </div>
          <div>
            <Logout />
          </div>
          <div>
            <a className="icon" onClick={this.handleTab}>
              <i className="fa fa-bars" />
            </a>
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
