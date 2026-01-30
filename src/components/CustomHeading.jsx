import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomHeading({ title }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: { 
    fontSize: 32,
    textAlign: 'center'
  },
})