import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#2d6ffeff',
    fontSize: 24,
    marginBottom: 12,
  },
  btn: {
    width: 220,
    backgroundColor: '#2d6ffeff',
    padding: 12,
    borderRadius: 12,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})