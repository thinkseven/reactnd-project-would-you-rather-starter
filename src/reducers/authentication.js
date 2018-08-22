import { LOGIN_USER, LOGOUT_USER } from '../actions/authentication'

export default function authedUser(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return action.authedUser
    case LOGOUT_USER:
      return {}
    default:
      return state
  }
}
