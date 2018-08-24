import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

class Navigation extends PureComponent {
  myRef = React.createRef()
  handleTab = () => {
    const x = this.myRef.current
    if (x.className === 'topnav') {
      x.className += ' responsive'
    } else {
      x.className = 'topnav'
    }
  }

  render() {
    return (
      <div>
        <div className="topnav" ref={this.myRef}>
          <Link to="/">Home</Link>
          <Link to="/add">New Question</Link>
          <Link to="/leaderboard">Leader Board</Link>
          <a className="icon" onClick={this.handleTab}>
            <i className="fa fa-bars" />
          </a>
        </div>
      </div>
    )
  }
}

export default Navigation
