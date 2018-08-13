import React, { Component } from 'react'

class Score extends Component {
  render() {
    const {
      answeredQuestionsCount,
      avatarURL,
      createdQuestionsCount,
      name,
      score,
    } = this.props.user
    return (
      <div className="wrapper">
        <div>
          <img src={avatarURL} alt={name} />
        </div>
        <div>
          <div>{name}</div>
          <div>{`Answered questions: ${answeredQuestionsCount}`}</div>
          <div>{`Created questions: ${createdQuestionsCount}`}</div>
        </div>
        <div>
          <div>
            <h2>Score</h2>
          </div>
          <div>
            <h2>{`${score}`}</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Score
