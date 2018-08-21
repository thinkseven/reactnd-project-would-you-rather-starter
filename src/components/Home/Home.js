import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import Question from './Question'
import './Home.css'

class Home extends Component {
  render() {
    const { answeredQuestions, unansweredQuestions } = this.props
    return (
      <Fragment>
        <Navigation />
        <div className="home">
          <div className="home-left">
            <div className="header">Unaswered Questions</div>
            {unansweredQuestions.map(question => {
              const { name, avatarURL, id, options } = question
              return (
                <Question
                  key={id}
                  name={name}
                  avatarURL={avatarURL}
                  id={id}
                  options={options}
                  answeredflag={false}
                />
              )
            })}
          </div>
          <div className="home-right">
            <div className="header">Answered Questions</div>
            {answeredQuestions.map(question => {
              const { name, avatarURL, id, options } = question
              return (
                <Question
                  key={id}
                  name={name}
                  avatarURL={avatarURL}
                  id={id}
                  options={options}
                  answeredflag={true}
                />
              )
            })}
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

  return filteredQuestions
    .map(key => {
      const { author, id, timestamp } = questions[key]
      const { avatarURL, name } = users[author]
      return {
        name,
        avatarURL,
        id,
        options: getOptions(questions[key], id),
        timestamp,
      }
    })
    .sort((a, b) => b.timestamp - a.timestamp)
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  const unasweredQuestions = Object.keys(questions).filter(key => {
    return !Object.keys(users[authedUser].answers).includes(key)
  })
  const answeredQuestions = Object.keys(questions).filter(key => {
    return Object.keys(users[authedUser].answers).includes(key)
  })

  return {
    unansweredQuestions: formatQuestion(users, questions, unasweredQuestions),
    answeredQuestions: formatQuestion(users, questions, answeredQuestions),
  }
}

Home.propTypes = {
  unansweredQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatarURL: PropTypes.string,
      id: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          questionId: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
      timestamp: PropTypes.number,
    }),
  ),
  answeredQuestions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatarURL: PropTypes.string,
      id: PropTypes.string,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          questionId: PropTypes.string,
          text: PropTypes.string,
        }),
      ),
      timestamp: PropTypes.number,
    }),
  ),
}

export default connect(mapStateToProps)(Home)
