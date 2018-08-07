import React from 'react'

import { storiesOf } from '@storybook/react'

import state from './state'
import CreateQuestion from '../components/CreateQuestion'

storiesOf('Question', module).add('create question', () => {
  return <CreateQuestion />
})
