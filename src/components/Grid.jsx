import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Grid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}></View>
      <View style={styles.centerContainer}></View>
      <View style={styles.rightContainer}></View>
    </View>
  )
}

export default Grid

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  leftContainer: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#c40f0fff'
  },
  centerContainer: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#b6e717ff'
  },
  rightContainer: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: '#0f9b12ff'
  }
})