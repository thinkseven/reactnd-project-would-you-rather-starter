import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import state from './state'
import Question from '../components/Question'

const mapStateToProps = (state, id) => {
  return {
    question: state.questions[id],
    user: state.users[state.questions[id].author],
  }
}

storiesOf('Question', module).add('with state', () => {
  const { user, question } = mapStateToProps(state, 'vthrdm985a262al8qx3do')
  return <Question user={user} question={question} />
})
