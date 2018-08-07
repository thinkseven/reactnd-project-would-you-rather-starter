import React, { Component } from 'react'

class Score extends Component {
  render() {
    const {
      answeredQuestionsCount,
      avatarUrl,
      createdQuestionsCount,
      id,
      name,
      score,
    } = this.props.user
    return (
      <div className="wrapper">
        <div>
          <img href="{avatarURL}" alt="{name}" />
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
