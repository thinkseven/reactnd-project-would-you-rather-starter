import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navingation'
import UnasweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'

class Home extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props
    return (
      <div>
        <Navigation />
        <div
          style={{
            padding: '8px',
            margin: '7px',
          }}
        >
          <div
            style={{
              border: '1px solid red',
              width: '500px',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                border: '10px solid red',
              }}
            >
              Unaswered Questions
            </div>
            <div
              style={{
                border: '2px solid green',
              }}
            >
              {unansweredQuestions.map(question => {
                const { name, avatarUrl, questionId, options } = question
                return (
                  <UnasweredQuestion
                    name={name}
                    avatarUrl={avatarUrl}
                    questionId={questionId}
                    options={options}
                  />
                )
              })}
            </div>
          </div>
          <div
            style={{
              border: '1px solid blue',
              width: '500px',
              display: 'inline-block',
            }}
          >
            <div
              style={{
                border: '10px solid blue',
              }}
            >
              Answered Questions
            </div>
            <div
              style={{
                border: '2px solid green',
              }}
            >
              {answeredQuestions.map(question => {
                const { name, avatarUrl, questionId, options } = question
                return (
                  <AnsweredQuestion
                    name={name}
                    avatarUrl={avatarUrl}
                    questionId={questionId}
                    options={options}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const formatQuestion = (users, questions, filteredQuestions) => {
  const formatOption = (option, id) => ({
    id: id,
    text: option.text,
  })

  const getOptions = (question, id) => {
    const options = []
    options.push(formatOption(question.optionOne, id))
    options.push(formatOption(question.optionTwo, id))
    return options
  }

  return filteredQuestions.map(key => {
    const { author, id } = questions[key]
    const { avatarUrl, name } = users[author]
    return {
      name,
      avatarUrl,
      id,
      options: getOptions(questions[key], id),
    }
  })
}

const mapStateToProps = state => {
  const unasweredQuestions = Object.keys(state.questions).filter(key => {
    return !Object.keys(state.users[state.authedUser].answers).includes(key)
  })
  const answeredQuestions = Object.keys(state.questions).filter(key => {
    return Object.keys(state.users[state.authedUser].answers).includes(key)
  })

  return {
    unansweredQuestions: formatQuestion(
      state.users,
      state.questions,
      unasweredQuestions,
    ),
    answeredQuestions: formatQuestion(
      state.users,
      state.questions,
      answeredQuestions,
    ),
  }
}

export default connect(mapStateToProps)(Home)
