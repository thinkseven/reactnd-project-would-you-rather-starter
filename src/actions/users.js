export const FETCH_USERS = 'FETCH_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'
export const ADD_USER_POLL = 'ADD_USER_POLL'
export const RESET_USERS = 'RESET_USERS'

export default function fetchUsers(users) {
  return {
    type: FETCH_USERS,
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

export function resetUsers(poll) {
  return {
    type: RESET_USERS,
  }
}
