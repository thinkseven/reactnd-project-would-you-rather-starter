import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Navigation from '../Navigation/Navigation'
import './Poll.css'

class Poll extends Component {
  render() {
    const { name, avatarURL, options } = this.props
    return (
      <Fragment>
        <Navigation />
        <div className="poll">
          <div className="header">
            <span>{`Asked by ${name}`}</span>
          </div>
          <div className="content">
            <div className="avatar">
              <img src={avatarURL} alt={name} />
            </div>
            <div className="result">
              <div>
                <h3>Results</h3>
              </div>
              {options.map((option, index) => {
                const { yourVote, text, votes, totalVotes } = option
                const percentage = Math.round((votes / totalVotes) * 100)
                return (
                  <div key={index}>
                    <div>
                      <p>
                        {text}
                        {yourVote && <span className="badge">Your vote</span>}
                      </p>
                    </div>
                    <div className="w3-light-grey">
                      <div
                        className="w3-container w3-green w3-center"
                        style={{ width: `${percentage}%` }}>
                        {`${percentage}%`}
                      </div>
                    </div>
                    <div
                      style={{
                        textAlign: 'center',
                      }}>{`${votes} out of ${totalVotes}`}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { match }) => {
  const id = match.params.id

  const formatOption = (option, totalVote) => ({
    yourVote: option.votes.includes(authedUser),
    text: `Would you rather ${option.text}`,
    votes: option.votes.length,
    totalVotes: totalVote,
  })

  const getOptions = question => {
    const options = []
    const totalVote =
      question.optionOne.votes.length + question.optionTwo.votes.length
    options.push(formatOption(question.optionOne, totalVote))
    options.push(formatOption(question.optionTwo, totalVote))
    return options
  }

  return {
    name: users[questions[id].author].name,
    avatarURL: users[questions[id].author].avatarURL,
    options: getOptions(questions[id]),
  }
}

Poll.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      yourVote: PropTypes.boolean,
      text: PropTypes.string,
      votes: PropTypes.number,
      totalVotes: PropTypes.number,
    }),
  ),
}

export default connect(mapStateToProps)(Poll)
