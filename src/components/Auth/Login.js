import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import AuthenticateUser from '../../actions/shared'
import Header from '../Header/Header'
import './Auth.css'

class Login extends Component {
  state = {
    currentUser: '',
    errorMsg: '',
  }

  changeUser = user => {
    if (user !== '-- Select Login User --' && user !== '') {
      this.setState({
        currentUser: user,
        errorMsg: '',
      })
    } else {
      this.setState({
        currentUser: '',
        errorMsg: 'Error: Please select the userid!!',
      })
    }
  }

  handleLogin = () => {
    if (this.state.currentUser !== '') {
      const { dispatch } = this.props
      dispatch(AuthenticateUser(this.state.currentUser))
    } else {
      this.setState(prevState => ({
        ...prevState,
        errorMsg: 'Error: Please select the userid!!',
      }))
    }
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="login">
          <div className="content">
            {this.state.errorMsg !== null &&
              this.state.errorMsg !== '' && (
                <div className="w3-panel w3-red">
                  <p>{this.state.errorMsg}</p>
                </div>
              )}
            <div className="item">
              <label htmlFor="uname">
                <b>Select a login user</b>
              </label>
              <select
                name="uname"
                onChange={e => this.changeUser(e.target.value)}
              >
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
