import {
  getUser,
  getUsersQuestions,
  saveQuestion,
  saveQuestionAnswer,
} from '../utils/API'
import getUsers, { addUserQuestion, addUserPoll } from '../actions/users'
import getQuestions, {
  addQuestion,
  addQuestionPoll,
} from '../actions/questions'
import login from '../actions/authentication'

export default function AuthenticateUser(userid) {
  return dispatch => {
    getUser().then(users => {
      setTimeout(() => {
        const user = { ...users[userid] }
        if (user && userid === user.id) {
          dispatch(login(user))
        }
      }, 2000)
    })
  }
}

export function getPostAuthData() {
  return dispatch => {
    return getUsersQuestions().then(({ users, questions }) => {
      dispatch(
        getUsers({
          ...users,
        }),
      )
      dispatch(
        getQuestions({
          ...questions,
        }),
      )
    })
  }
}

export function SubmitPoll({ authedUser, qid, answer }) {
  return dispatch => {
    saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    }).then(() => {
      dispatch(
        addUserPoll({
          authedUser,
          questionId: qid,
          selectedOption: answer,
        }),
      )
      dispatch(
        addQuestionPoll({
          authedUser,
          questionId: qid,
          selectedOption: answer,
        }),
      )
    })
  }
}

export function AddQuestion(question) {
  return dispatch => {
    saveQuestion(question).then(question => {
      dispatch(addQuestion(question))
      dispatch(addUserQuestion(question))
    })
  }
}
