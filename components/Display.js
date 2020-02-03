import React from 'react'

import { View, Text } from 'react-native'

const Display = ({ gameOver, text }) => {
  return (
    <View>
      <Text>{text}</Text>
    </View>
  )
}

export default Display
