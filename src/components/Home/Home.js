import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import UnasweredQuestion from './UnansweredQuestion'
import AnsweredQuestion from './AnsweredQuestion'
import './Home.css'

class Home extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props
    return (
      <Fragment>
        <Navigation />
        <div className="home">
          <div className="home-left">
            <div className="item">Unaswered Questions</div>
            <div className="item">
              {unansweredQuestions.map(question => {
                const { name, avatarURL, id, options } = question
                return (
                  <UnasweredQuestion
                    name={name}
                    avatarURL={avatarURL}
                    id={id}
                    options={options}
                  />
                )
              })}
            </div>
          </div>
          <div className="home-right">
            <div className="item">Answered Questions</div>
            <div className="item">
              {answeredQuestions.map(question => {
                const { name, avatarURL, id, options } = question
                return (
                  <AnsweredQuestion
                    name={name}
                    avatarURL={avatarURL}
                    id={id}
                    options={options}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const formatQuestion = (users, questions, filteredQuestions) => {
  const formatOption = (option, questionId) => ({
    questionId: questionId,
    text: option.text,
  })

  const getOptions = (question, questionId) => {
    const options = []
    options.push(formatOption(question.optionOne, questionId))
    options.push(formatOption(question.optionTwo, questionId))
    return options
  }

  return filteredQuestions.map(key => {
    const { author, id } = questions[key]
    const { avatarURL, name } = users[author]
    return {
      name,
      avatarURL,
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
