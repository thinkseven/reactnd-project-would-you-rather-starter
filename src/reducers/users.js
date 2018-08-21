import { GET_USERS, ADD_USER_QUESTION, ADD_USER_POLL } from '../actions/users'

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      }
    case ADD_USER_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [
            ...state[action.question.author].questions,
            action.question.id,
          ],
        },
      }
    case ADD_USER_POLL:
      return {
        ...state,
        [action.poll.authedUser]: {
          ...state[action.poll.authedUser],
          answers: {
            ...state[action.poll.authedUser].answers,
            [action.poll.questionId]: action.poll.selectedOption,
          },
        },
      }
    default:
      return state
  }
}
