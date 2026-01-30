import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function CustomButton() {

  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <Button title="Press Me" onPress={handleCount} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  count: { 
    textAlign: 'center', 
    fontSize: 24 
  }
})