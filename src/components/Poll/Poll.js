import React, { Component, Fragment } from 'react'
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
          <div
            style={{
              display: 'flex',
              'justify-content': 'space-evenly',
              'align-items': 'center',
            }}
          >
            <div className="avatar">
              <img src={avatarURL} alt={name} />
            </div>
            <div>
              <div>
                <h2>Results</h2>
              </div>
              {options.map(option => {
                const { yourVote, text, votes, totalVotes } = option
                return (
                  <div>
                    <div
                      style={{
                        display: yourVote ? 'block' : 'none',
                      }}
                    >
                      Your vote
                    </div>
                    <div>
                      <p>{text}</p>
                    </div>
                    <div>
                      <p>{`${votes} out of ${totalVotes}`}</p>
                    </div>
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

export default connect(mapStateToProps)(Poll)
