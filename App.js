import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Greeting from './Greeting'

export default function App() {
  let pic = {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Some big text!</Text>
      <Text>This is my app</Text>
      <Image source={pic} style={{ width: 193, height: 110 }} />
      <Greeting name="Rexxar" />
      <Greeting name="Jaina" />
      <Greeting name="Valeera" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red'
  }
})
