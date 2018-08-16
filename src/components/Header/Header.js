import React, { Component } from 'react'
import logo from '../../images/wouldyourather-1.png'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="Would You Rather?" />
      </div>
    )
  }
}

export default Header
