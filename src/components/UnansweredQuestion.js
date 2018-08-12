import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UnasweredQuestion extends Component {
  render() {
    const { name, avatarUrl, id, options } = this.props
    return (
      <div className="wrapper">
        <div className="top">
          <div className="main">
            <div>
              <h3>{`${name} asks:`}</h3>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div>
              <img href="{avatarUrl}" alt="{name}" />
            </div>
          </div>
          <div className="seperator" />
          <div className="right">
            <div>
              <h3>Would You Rather ...</h3>
            </div>
            {options.map(option => {
              const { id, text } = option
              return (
                <div>
                  <label for="{text}">{text}</label>
                </div>
              )
            })}
            <div>
              <Link to={`/question/${id}`}>View Poll</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UnasweredQuestion
