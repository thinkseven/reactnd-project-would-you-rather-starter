import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import SubmitQuestionPoll from './SubmitPoll/SubmitPoll'
import ViewPoll from './ViewPoll/ViewPoll'
import withLayout from '../Layout/Layout'

class Question extends Component {
  render() {
    const { status } = this.props
    return (
      <Fragment>
        {status === 'NOT FOUND' ? (
          <div className="w3-panel w3-red w3-card-4">
            <h3>question not found. please go to home for current questions</h3>
          </div>
        ) : status === 'ANSWERED' ? (
          <ViewPoll {...this.props} />
        ) : (
          <SubmitQuestionPoll {...this.props} />
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser, users, questions }, { match }) => {
  const id = match.params.question_id
  if (questions && questions[id]) {
    if (Object.keys(users[authedUser.id].answers).includes(id)) {
      // check if this question answered or not by the current user
      // question answered by current user: ready for poll view
      // View Poll Question Format
      const formatOption1 = (option, totalVote) => ({
        yourVote: option.votes.includes(authedUser.id),
        text: `Would you rather ${option.text}`,
        votes: option.votes.length,
        totalVotes: totalVote,
      })

      const getOptions1 = question => {
        const options = []
        const totalVote =
          question.optionOne.votes.length + question.optionTwo.votes.length
        options.push(formatOption1(question.optionOne, totalVote))
        options.push(formatOption1(question.optionTwo, totalVote))
        return options
      }

      return {
        status: 'ANSWERED',
        name: users[questions[id].author].name,
        avatarURL: users[questions[id].author].avatarURL,
        options: getOptions1(questions[id]),
      }
    } else {
      // question not answered by current user: ask to submit question
      // Submit Poll Question Format
      const formatOption2 = (optionId, { text }) => ({
        optionId,
        text,
      })

      const getOptions2 = (question, questionId) => {
        const options = []
        options.push(formatOption2('optionOne', question.optionOne))
        options.push(formatOption2('optionTwo', question.optionTwo))
        return options
      }

      return {
        status: 'UNANSWERED',
        name: users[questions[id].author].name,
        avatarURL: users[questions[id].author].avatarURL,
        authedUser: authedUser.id,
        questionId: id,
        options: getOptions2(questions[id], id),
      }
    }
  } else {
    return {
      status: 'NOT FOUND',
    }
  }
}

export default withLayout(connect(mapStateToProps)(Question))
