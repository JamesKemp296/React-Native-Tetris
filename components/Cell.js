import React from 'react'

import { View, Text } from 'react-native'

import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => {
  return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>
      <Text>Cell</Text>
    </StyledCell>
  )
}

export default Cell
