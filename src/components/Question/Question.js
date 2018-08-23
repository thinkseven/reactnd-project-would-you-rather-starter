import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import SubmitQuestionPoll from './SubmitPoll/SubmitPoll'
import ViewPoll from './ViewPoll/ViewPoll'

class Question extends PureComponent {
  render() {
    const { isAnswered } = this.props
    return (
      <Fragment>
        {isAnswered ? (
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

  // check is question answered or not by the current user
  if (Object.keys(users[authedUser.id].answers).includes(id)) {
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
      name: users[questions[id].author].name,
      avatarURL: users[questions[id].author].avatarURL,
      options: getOptions1(questions[id]),
      isAnswered: true,
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
      isAnswered: false,
      name: users[questions[id].author].name,
      avatarURL: users[questions[id].author].avatarURL,
      authedUser: authedUser.id,
      questionId: id,
      options: getOptions2(questions[id], id),
    }
  }
}

export default connect(mapStateToProps)(Question)
