import React from 'react'
import { StyleSheet, Text } from 'react-native'

const Greeting = ({ name }) => {
  return <Text style={styles.greet}>Hello {name}!</Text>
}

const colors = ['red', 'green', 'blue', 'purple', 'yellow']
let randomColor = colors[Math.floor(Math.random() * colors.length)]

const styles = StyleSheet.create({
  greet: {
    fontSize: 15,
    color: 'red'
  }
})

export default Greeting
