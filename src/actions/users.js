export const GET_USERS = 'GET_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_POLL = 'ADD_USER_POLL'

export default function getUsers(users) {
  return {
    type: GET_USERS,
    users,
  }
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  }
}

export function addUserPoll(poll) {
  return {
    type: ADD_USER_POLL,
    poll,
  }
}
