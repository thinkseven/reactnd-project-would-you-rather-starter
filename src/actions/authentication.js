export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export default function login(authedUser) {
  return {
    type: LOGIN_USER,
    authedUser,
  }
}

export function logout() {
  return {
    type: LOGOUT_USER,
  }
}
