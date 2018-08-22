export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_POLL = 'ADD_QUESTION_POLL'
export const RESET_QUESTIONS = 'RESET_QUESTIONS'

export default function fetchQuestions(questions) {
  return {
    type: FETCH_QUESTIONS,
    questions,
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addQuestionPoll(poll) {
  return {
    type: ADD_QUESTION_POLL,
    poll,
  }
}

export function resetQuestions(poll) {
  return {
    type: RESET_QUESTIONS,
  }
}
