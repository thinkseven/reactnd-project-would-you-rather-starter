import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import './LeaderBoard.css'
import Score from './Score'
import Navigation from '../Navigation/Navigation'

class LeaderBoard extends Component {
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className="leaderBoard">
          <div className="header">Leader Board</div>
          {this.props.scores.map(score => (
            <Score user={score} />
          ))}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const scores = Object.keys(users).map(key => {
    const { id, name, avatarURL, answers, questions } = users[key]
    const answeredQuestionsCount = Object.keys(answers).length
    const createdQuestionsCount = Object.keys(questions).length
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
