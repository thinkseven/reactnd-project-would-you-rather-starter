import React, { Component } from 'react'

class Question extends Component {
  render() {
    const { name, avatarUrl, questionId, options } = this.props
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
              <img href="{avatarURL}" alt="{name}" />
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
                  <input type="radio" id="{id}" name="{id}" checked />
                  <label for="{text}">{text}</label>
                </div>
              )
            })}
            <div>
              <button name="submit" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Question
