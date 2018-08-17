import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../Auth/Logout'
import './Navigation.css'

class Navigation extends PureComponent {
  myRef = React.createRef()
  handleTab = () => {
    const x = this.myRef.current
    if (x.className === 'topnav col-es-12 col-s-9') {
      x.className += ' col-es-12 col-s-9 responsive'
    } else {
      x.className = 'topnav col-es-12 col-s-9'
    }
  }

  render() {
    return (
      <div>
        <div className="topnav col-es-12 col-s-9" ref={this.myRef}>
          <Link to="/">Home</Link>
          <Link to="/question/create">New Question</Link>
          <Link to="/leaderboard">Leader Board</Link>
          <a className="icon" onClick={this.handleTab}>
            <i className="fa fa-bars" />
          </a>
        </div>
        <Logout />
      </div>
    )
  }
}

export default Navigation
