import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AnsweredQuestion extends Component {
  render() {
    const { name, avatarURL, id, options } = this.props
    return (
      <div>
        <div>
          <div>
            <div>
              <h3>{`${name} asks:`}</h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img src={avatarURL} alt={name} />
            </div>
          </div>
          <div />
          <div>
            <div>
              <h3>Would You Rather ...</h3>
            </div>
            {options.map(option => {
              const { text } = option
              return (
                <div>
                  <label for="{text}">{text}</label>
                </div>
              )
            })}
            <div>
              <Link to={`//question//poll/${id}`}>View Poll</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AnsweredQuestion
