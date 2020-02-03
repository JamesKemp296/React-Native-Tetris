import React from 'react'
import styled from 'styled-components'
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View
} from 'react-native'

import Tetris from './components/Tetris'

const App = () => {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <View>
        <Tetris />
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
