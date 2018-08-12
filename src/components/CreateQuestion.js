import React, { Component } from 'react'
import { connect } from 'react-redux'
import { _saveQuestion } from '../utils/_DATA'
import { addQuestion } from '../actions/questions'
import Navigation from './Navingation'

class CreateQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
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
    const { author, dispatch } = this.props
    _saveQuestion({ ...this.state, author: author }).then(question => {
      dispatch(addQuestion(question))
      this.setState({
        optionOneText: '',
        optionTwoText: '',
      })
    })
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

const mapStateToProps = state => {
  return {
    author: state.authedUser,
  }
}

export default connect(mapStateToProps)(CreateQuestion)
