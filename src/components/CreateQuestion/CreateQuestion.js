import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AddQuestion } from '../../actions/shared'
import Navigation from '../Navigation/Navigation'
import './CreateQuestion.css'

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
    const { author, dispatch, history } = this.props
    dispatch(AddQuestion({ ...this.state, author: author }))
    this.setState({
      optionOneText: '',
      optionTwoText: '',
    })
    history.push('/')
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <div className="newQuestion">
          <div>
            <h2>Create New Question</h2>
          </div>
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

const mapStateToProps = state => {
  return {
    author: state.authedUser,
  }
}

CreateQuestion.propTypes = {
  author: PropTypes.string,
}

export default connect(mapStateToProps)(CreateQuestion)
