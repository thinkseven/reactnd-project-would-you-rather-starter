import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { SubmitPoll } from '../../../actions/shared'
import '../SubmitPoll/SubmitPoll.css'

class SubmitQuestionPoll extends PureComponent {
  state = {
    selectedOption: 'optionOne',
  }

  handleOptionSelection = event => {
    this.setState({
      selectedOption: event.target.value,
    })
  }

  handlerSubmitPoll = event => {
    event.preventDefault()
    const { dispatch, history, authedUser, questionId } = this.props
    const { selectedOption } = this.state
    dispatch(
      SubmitPoll({
        authedUser: authedUser,
        qid: questionId,
        answer: selectedOption,
      }),
    )
    history.push(`/question/${questionId}`)
  }

  render() {
    const { name, avatarURL, questionId, options } = this.props
    return (
      <Fragment>
        <div className="unansweredQuestion">
          <div className="header">{`${name} asks:`}</div>
          <div className="content">
            <div className="avatar">
              <img src={avatarURL} alt={name} />
            </div>
            <div className="right">
              <div>Would You Rather ...</div>
              {options &&
                options.map(option => {
                  const { optionId, text } = option
                  return (
                    <div key={optionId}>
                      <input
                        type="radio"
                        name={questionId}
                        id={optionId}
                        value={optionId}
                        checked={this.state.selectedOption === optionId}
                        onChange={this.handleOptionSelection}
                      />
                      <label htmlFor={text}>{text}</label>
                    </div>
                  )
                })}
              <div>
                <button
                  className="w3-button w3-black"
                  name="submit"
                  type="submit"
                  onClick={this.handlerSubmitPoll}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

SubmitQuestionPoll.propTypes = {
  name: PropTypes.string,
  avatarURL: PropTypes.string,
  authedUser: PropTypes.string,
  questionId: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      optionId: PropTypes.string,
      text: PropTypes.string,
    }),
  ),
}

export default SubmitQuestionPoll
