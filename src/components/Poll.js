import React, { Component } from 'react'

class Poll extends Component {
  render() {
    const { name, avatarUrl, options } = this.props
    return (
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
                    }}>
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
    )
  }
}

export default Poll
