export const GET_USERS = 'GET_USERS'
export const ADD_QUESTION = 'ADD_QUESTION'

export default function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  }
}
