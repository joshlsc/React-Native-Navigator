import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function CustomHeader({ ...props }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.desc}>{props.desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: { fontSize: 24 },
  desc: { fontSize: 16 },
})