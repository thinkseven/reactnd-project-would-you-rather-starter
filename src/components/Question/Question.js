import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import { SubmitPoll } from '../../actions/shared'
import './Question.css'

class Question extends Component {
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
    history.push(`/question/poll/${questionId}`)
  }

  render() {
    const { name, avatarURL, questionId, options } = this.props
    return (
      <Fragment>
        <Navigation />
        <div className="unansweredQuestion">
          <div className="header">{`${name} asks:`}</div>
          <div className="content">
            <div className="avatar">
              <img src={avatarURL} alt={name} />
            </div>
            <div className="right">
              <div>Would You Rather ...</div>
              {options.map(option => {
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
                  onClick={this.handlerSubmitPoll}>
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

const mapStateToProps = ({ authedUser, users, questions }, { match }) => {
  const id = match.params.id
  const formatOption = (optionId, { text }) => ({
    optionId,
    text,
  })

  const getOptions = (question, questionId) => {
    const options = []
    options.push(formatOption('optionOne', question.optionOne))
    options.push(formatOption('optionTwo', question.optionTwo))
    return options
  }

  return {
    name: users[questions[id].author].name,
    avatarURL: users[questions[id].author].avatarURL,
    authedUser: authedUser.id,
    questionId: id,
    options: getOptions(questions[id], id),
  }
}

Question.propTypes = {
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

export default connect(mapStateToProps)(Question)
