import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import state from './state'
import Question from '../components/Question'

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

storiesOf('Question', module).add('question view', () => {
  const { name, avatarUrl, questionId, options } = mapStateToProps(
    state,
    'vthrdm985a262al8qx3do',
  )
  return (
    <Question
      name={name}
      avatarUrl={avatarUrl}
      questionId={questionId}
      options={options}
    />
  )
})
