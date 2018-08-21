import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoginUser from '../../actions/shared'
import Header from '../Header/Header'
import './Auth.css'

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
    dispatch(LoginUser(this.state.currentUser))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="login">
          <div className="content">
            <div className="item">
              <label htmlFor="uname">
                <b>Select a login user</b>
              </label>
              <select
                name="uname"
                onChange={e => {
                  this.changeUser(e.target.value)
                }}>
                <option>-- Select Login User --</option>
                <option value="sarahedo">Sarah Edo</option>
                <option value="tylermcginnis">Tyler McGinnis</option>
                <option value="johndoe">John Doe</option>
              </select>
            </div>
            <div className="item">
              <button type="button" onClick={this.handleLogin}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default connect()(Login)
