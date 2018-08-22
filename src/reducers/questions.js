import {
  FETCH_QUESTIONS,
  ADD_QUESTION,
  ADD_QUESTION_POLL,
  RESET_QUESTIONS,
} from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      }
    case ADD_QUESTION_POLL:
      return {
        ...state,
        [action.poll.questionId]: {
          ...state[action.poll.questionId],
          [action.poll.selectedOption]: {
            ...state[action.poll.questionId][action.poll.selectedOption],
            votes: [
              ...state[action.poll.questionId][action.poll.selectedOption]
                .votes,
              action.poll.authedUser,
            ],
          },
        },
      }
    case RESET_QUESTIONS:
      return {}
    default:
      return state
  }
}
