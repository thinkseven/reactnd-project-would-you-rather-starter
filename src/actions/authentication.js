export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export default function login({ id, name, avatarURL }) {
  return {
    type: LOGIN_USER,
    authedUser: { id, name, avatarURL },
  }
}

export function logout() {
  return {
    type: LOGOUT_USER,
  }
}
