import React, { Component } from 'react'
import { connect } from 'react-redux'
import login from '../../actions/authentication'
import getUsers from '../../actions/users'
import getQuestions from '../../actions/questions'
import { _getUsers, _getQuestions } from '../../utils/_DATA'

class Login extends Component {
  state = {
    currentUser: '',
  }

  changeUser = user => {
    this.setState({
      currentUser: user,
    })
  }

  handleLogin = () => {
    const { dispatch } = this.props
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(
        getUsers({
          ...users,
        }),
      )
      dispatch(
        getQuestions({
          ...questions,
        }),
      )
      dispatch(login(this.state.currentUser))
    })
  }

  render() {
    return (
      <div>
        <select
          onChange={e => {
            this.changeUser(e.target.value)
          }}
        >
          <option>Select Login User</option>
          <option value="sarahedo">Sarah Edo</option>
          <option value="tylermcginnis">Tyler McGinnis</option>
          <option value="johndoe">John Doe</option>
        </select>
        <button type="button" onClick={this.handleLogin}>
          Submit
        </button>
      </div>
    )
  }
}

export default connect()(Login)
