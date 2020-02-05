import React from 'react'
import { View } from 'react-native'
import { StyledStage } from './styles/StyledStage'

import Cell from './Cell'

const Stage = ({ stage }) => {
  return (
    <StyledStage>
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
  )
}

export default Stage
