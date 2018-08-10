export const GET_QUESTIONS = 'GET_QUESTIONS'

export default function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}
