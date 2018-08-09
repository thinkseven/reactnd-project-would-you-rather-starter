import { LOGIN_USER, LOGOUT_USER } from '../actions/authentication'

export default function authedUser(state = null, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.userid
    case LOGOUT_USER:
      return ''
    default:
      return state
  }
}
