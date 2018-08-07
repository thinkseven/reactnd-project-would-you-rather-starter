import React, { Component } from 'react'
import Score from './Score'

class LeaderBoard extends Component {
  render() {
    return this.props.users.map(user => <Score user={user} />)
  }
}

export default LeaderBoard
