import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Details')}>
        <Text style={styles.btnText}>Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Products')}>
        <Text style={styles.btnText}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Store')}>
        <Text style={styles.btnText}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Test')}>
        <Text style={styles.btnText}>Test</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('TaskManager')}>
        <Text style={styles.btnText}>Task Manager</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

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
    marginBottom: 16
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    textTransform: 'uppercase',
    textAlign: 'center',
  }
})