import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import { addUserPoll } from '../../actions/users'
import { addQuestionPoll } from '../../actions/questions'
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
    const { dispatch, authedUser, questionId } = this.props
    const { selectedOption } = this.state
    dispatch(
      addUserPoll({
        authedUser,
        questionId,
        selectedOption,
      }),
    )
    dispatch(
      addQuestionPoll({
        authedUser,
        questionId,
        selectedOption,
      }),
    )
  }

  render() {
    const { name, avatarURL, questionId, options } = this.props
    return (
      <Fragment>
        <Navigation />
        <div className="unansweredQuestion">
          <div>
            <h3>{`${name} asks:`}</h3>
          </div>
          <div className="unansweredQuestion-content">
            <div className="left">
              <div>
                <img src={avatarURL} alt={name} />
              </div>
            </div>
            <div className="right">
              <div>
                <h3>Would You Rather ...</h3>
              </div>
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
                    <label for={text}>{text}</label>
                  </div>
                )
              })}
              <div>
                <button
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
    authedUser,
    questionId: id,
    options: getOptions(questions[id], id),
  }
}

export default connect(mapStateToProps)(Question)