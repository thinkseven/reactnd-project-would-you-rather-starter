import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import withLayout from '../Layout/Layout'
import './LeaderBoard.css'
import Score from './Score'

class LeaderBoard extends Component {
  render() {
    return (
      <Fragment>
        <div className="leaderBoard">
          <div className="header">Leader Board</div>
          {this.props.scores.map(score => (
            <Score key={score.id} user={score} />
          ))}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ users }) => {
  const scores = Object.keys(users)
    .map(key => {
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
    .sort((a, b) => b.score > a.score)
  return {
    scores,
  }
}

LeaderBoard.propTypes = {
  scores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatarURL: PropTypes.string,
      answeredQuestionsCount: PropTypes.number,
      createdQuestionsCount: PropTypes.number,
      score: PropTypes.number,
    }),
  ),
}

export default withLayout(connect(mapStateToProps)(LeaderBoard))
