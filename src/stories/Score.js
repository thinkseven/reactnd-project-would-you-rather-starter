import React from 'react'

import { storiesOf } from '@storybook/react'

import state from './state'
import Score from '../components/Score'

const mapStateToProps = () => ({
  id: 'sarahedo',
  name: 'Sarah Edo',
  avatarUrl: '',
  answeredQuestionsCount: 3,
  createdQuestionsCount: 2,
  score: 5,
})

storiesOf('Leader Board', module).add('single score view', () => {
  return <Score user={mapStateToProps()} />
})
