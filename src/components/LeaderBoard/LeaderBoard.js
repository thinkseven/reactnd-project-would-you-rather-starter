import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './LeaderBoard.css'
import { getPostAuthData } from '../../actions/shared'
import Score from './Score'
import Navigation from '../Navigation/Navigation'

class LeaderBoard extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getPostAuthData())
  }

  render() {
    return (
      <Fragment>
        <Navigation />
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

export default connect(mapStateToProps)(LeaderBoard)
