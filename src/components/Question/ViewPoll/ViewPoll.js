import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import '../ViewPoll/ViewPoll.css'

class ViewPoll extends Component {
  render() {
    const { name, avatarURL, options } = this.props
    return (
      <Fragment>
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
              {options &&
                options.map((option, index) => {
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
                          style={{ width: `${percentage}%` }}
                        >
                          {`${percentage}%`}
                        </div>
                      </div>
                      <div
                        style={{
                          textAlign: 'center',
                        }}
                      >{`${votes} out of ${totalVotes}`}</div>
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

ViewPoll.propTypes = {
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

export default connect()(ViewPoll)
