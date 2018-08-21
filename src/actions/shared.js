import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/_DATA'
import getUsers, { addUserQuestion, addUserPoll } from '../actions/users'
import getQuestions, {
  addQuestion,
  addQuestionPoll,
} from '../actions/questions'
import login from '../actions/authentication'

export default function LoginUser(userid) {
  return dispatch => {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
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
        dispatch(login(userid))
      },
    )
  }
}

export function SubmitPoll({ authedUser, qid, answer }) {
  return dispatch => {
    _saveQuestionAnswer({
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

export function AddQuestion({ optionOneText, optionTwoText, author }) {
  return dispatch => {
    _saveQuestion({ optionOneText, optionTwoText, author }).then(question => {
      dispatch(addQuestion(question))
      dispatch(addUserQuestion(question))
    })
  }
}
