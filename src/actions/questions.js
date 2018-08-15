export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_POLL = 'ADD_QUESTION_POLL'

export default function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
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
