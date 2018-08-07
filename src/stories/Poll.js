import React from 'react'

import { storiesOf } from '@storybook/react'

import state from './state'
import Poll from '../components/Poll'

const mapStateToProps = (state, id) => {
  const formatOption = (option, totalVote) => ({
    yourVote: option.votes.includes(state.authedUser),
    text: `Would you rather ${option.text}`,
    votes: option.votes.length,
    totalVotes: totalVote,
  })

  const getOptions = question => {
    const options = []
    const totalVote =
      question.optionOne.votes.length + question.optionTwo.votes.length
    options.push(formatOption(question.optionOne, totalVote))
    options.push(formatOption(question.optionTwo, totalVote))
    return options
  }

  return {
    name: state.users[state.questions[id].author].name,
    avatarUrl: state.users[state.questions[id].author].avatarUrl,
    options: getOptions(state.questions[id]),
  }
}

storiesOf('Question', module).add('question with poll view', () => {
  const { name, avatarUrl, options } = mapStateToProps(
    state,
    'vthrdm985a262al8qx3do',
  )
  return <Poll name={name} avatarUrl={avatarUrl} options={options} />
})
