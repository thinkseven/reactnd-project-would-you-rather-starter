import React, { Component } from 'react'
import { _saveQuestion } from '../utils/_DATA'
import Navigation from './Navingation'

class CreateQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    author: 'tylermcginnis',
  }

  hanldeOption = event => {
    event.preventDefault()
    event.persist()
    this.setState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    _saveQuestion(this.state)
  }

  render() {
    return (
      <div>
        <div>
          <Navigation />
        </div>
        <div>
          <h2>Create New Question</h2>
        </div>
        <div>
          <div>
            <h4>Complete the question</h4>
          </div>
          <div>
            <h3>Would you rather ...</h3>
          </div>
          <div>
            <input
              id="optionOneText"
              name="optionOneText"
              type="text"
              placeholder="Enter Option One Text Here"
              value={this.state.optionOneText}
              onChange={this.hanldeOption}
            />
          </div>
          <div>
            <h2> OR </h2>
          </div>
          <div>
            <input
              id="optionTwoText"
              name="optionTwoText"
              type="text"
              placeholder="Enter Option Two Text Here"
              value={this.state.optionTwoText}
              onChange={this.hanldeOption}
            />
          </div>
          <div>
            <button name="submit" type="submit" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateQuestion
