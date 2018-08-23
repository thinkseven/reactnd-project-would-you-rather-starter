import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddQuestion } from '../../actions/shared'
import './CreateQuestion.css'

class CreateQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    errorMsg: '',
  }

  hanldeOption = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  handleSubmit = event => {
    event.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    if (
      optionOneText === null ||
      optionTwoText === null ||
      optionOneText === '' ||
      optionTwoText === ''
    ) {
      this.setState(prevState => ({
        ...prevState,
        errorMsg: 'Error: Please provide the options for the question!!',
      }))
    } else {
      const { author, dispatch, history } = this.props
      dispatch(AddQuestion({ ...this.state, author: author }))
      this.setState(
        {
          optionOneText: '',
          optionTwoText: '',
          errorMsg: '',
        },
        () => {
          history.push('/')
        },
      )
    }
  }

  render() {
    return (
      <Fragment>
        <div className="newQuestion">
          <div>
            <h2>Create New Question</h2>
          </div>
          {this.state.errorMsg !== null &&
            this.state.errorMsg !== '' && (
              <div className="w3-panel w3-red">
                <p>{this.state.errorMsg}</p>
              </div>
            )}
          <div>
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
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    author: authedUser.id,
  }
}

CreateQuestion.propTypes = {
  author: PropTypes.string,
}

export default connect(mapStateToProps)(CreateQuestion)
