import React, { PureComponent } from 'react'
import logo from '../../images/wouldyourather-1.png'
import './Header.css'

class Header extends PureComponent {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="Would You Rather?" />
      </div>
    )
  }
}

export default Header
