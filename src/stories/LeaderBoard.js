import React from 'react'

import { storiesOf } from '@storybook/react'

import state from './state'
import LeaderBoard from '../components/LeaderBoard'

const mapStateToProps = users => {
  return Object.keys(users).map(key => {
    const { id, name, avatarUrl } = users[key]
    const answeredQuestionsCount = Object.keys(users.johndoe.answers).length
    const createdQuestionsCount = Object.keys(users.johndoe.questions).length
    const score = answeredQuestionsCount + createdQuestionsCount
    return {
      id,
      name,
      avatarUrl,
      answeredQuestionsCount,
      createdQuestionsCount,
      score,
    }
  })
}

storiesOf('Leader Board', module).add('leader board - score view', () => {
  const users = mapStateToProps(state.users)
  return <LeaderBoard users={users} />
})
