import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navingation'

class Home extends Component {
  render() {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}

export default connect()(Home)
