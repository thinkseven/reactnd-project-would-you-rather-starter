import {
  GET_QUESTIONS,
  ADD_QUESTION,
  ADD_QUESTION_POLL,
} from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
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
    default:
      return state
  }
}
