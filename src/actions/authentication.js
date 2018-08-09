export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export default function login(userid) {
  return {
    type: LOGIN_USER,
    userid,
  }
}

export function logout() {
  return {
    type: LOGOUT_USER,
  }
}
