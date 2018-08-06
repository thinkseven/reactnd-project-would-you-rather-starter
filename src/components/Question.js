import React, { Component } from 'react'
import '../styles.css'

class Question extends Component {
  render() {
    const { avatarURL } = this.props.user
    const { id, author, optionOne, optionTwo } = this.props.question
    return (
      <div className="wrapper">
        <div className="top">
          <div className="main">
            <div>
              <h3>{`${author} asks:`}</h3>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left">
            <div>
              <img href="{avatarURL}" alt="{author}" />
            </div>
          </div>
          <div className="seperator" />
          <div className="right">
            <div>
              <h3>Would You Rather ...</h3>
            </div>
            <div>
              <input type="radio" id="{optionOne.text}" name="{id}" checked />
              <label for="{optionOne.text}">{optionTwo.text}</label>
            </div>
            <div>
              <input type="radio" id="{optionTwo.text}" name="{id}" />
              <label for="{optionTwo.text}">{optionTwo.text}</label>
            </div>
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
