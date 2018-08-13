import React, { Component } from 'react'
import { connect } from 'react-redux'
import Score from './Score'
import Navigation from './Navingation'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>
          {this.props.scores.map(score => (
            <Score user={score} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const scores = Object.keys(users).map(key => {
    const { id, name, avatarURL } = users[key]
    const answeredQuestionsCount = Object.keys(users.johndoe.answers).length
    const createdQuestionsCount = Object.keys(users.johndoe.questions).length
    const score = answeredQuestionsCount + createdQuestionsCount
    return {
      id,
      name,
      avatarURL,
      answeredQuestionsCount,
      createdQuestionsCount,
      score,
    }
  })
  return {
    scores,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
