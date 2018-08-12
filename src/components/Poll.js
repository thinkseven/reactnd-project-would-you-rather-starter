import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navingation'

class Poll extends Component {
  render() {
    const { name, avatarUrl, options } = this.props
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div className="wrapper">
          <div className="top">
            <div className="main">
              <div>
                <h3>{`Asked by ${name}`}</h3>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <div>
                <img href="{avatarURL}" alt="{name}" />
              </div>
            </div>
            <div className="seperator" />
            <div className="right">
              <div>
                <h3>Results</h3>
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
                    <div>{text}</div>
                    <div>{`${votes} out of ${totalVotes}`}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
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
    avatarUrl: users[questions[id].author].avatarUrl,
    options: getOptions(questions[id]),
  }
}

export default connect(mapStateToProps)(Poll)
