import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './Question.css'

class Question extends PureComponent {
  render() {
    const { name, avatarURL, id, options, answeredflag } = this.props
    return (
      <div className="question">
        <div className="question-header">
          <h3>{`${name} asks:`}</h3>
        </div>
        <div className="question-content">
          <div className="question-content-left avatar">
            <img src={avatarURL} alt={name} />
          </div>
          <div className="question-content-right">
            <div>
              <h3>Would You Rather ...</h3>
            </div>
            {options.map(option => {
              const { text } = option
              return (
                <div>
                  <label for="{text}">{text}</label>
                </div>
              )
            })}
            <div>
              {answeredflag === true ? (
                <Link to={`/question/poll/${id}`}>View Poll</Link>
              ) : (
                <Link to={`/question/${id}`}>View Poll</Link>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Question
