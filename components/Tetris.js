import React from 'react'
import { View } from 'react-native'

import { createStage } from '../gameHelpers'

import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

const Tetris = () => {
  return (
    <View>
      <Stage stage={createStage()} />
      <View>
        <Display text="score" />
        <Display text="Rows" />
        <Display text="Level" />
        <StartButton />
      </View>
    </View>
  )
}

export default Tetris
