import React from 'react'

import { storiesOf } from '@storybook/react'

import state from './state'
import AnsweredQuestion from '../components/AnsweredQuestion'

const mapStateToProps = (state, id) => {
  const formatOption = (option, id) => ({
    id: id,
    text: option.text,
  })

  const getOptions = (question, id) => {
    const options = []
    options.push(formatOption(question.optionOne, id))
    options.push(formatOption(question.optionTwo, id))
    return options
  }

  return {
    name: state.users[state.questions[id].author].name,
    avatarUrl: state.users[state.questions[id].author].avatarUrl,
    questionId: id,
    options: getOptions(state.questions[id], id),
  }
}

storiesOf('Question', module).add('answered question', () => {
  const { name, avatarUrl, questionId, options } = mapStateToProps(
    state,
    'vthrdm985a262al8qx3do',
  )
  return (
    <AnsweredQuestion
      name={name}
      avatarUrl={avatarUrl}
      questionId={questionId}
      options={options}
    />
  )
})
