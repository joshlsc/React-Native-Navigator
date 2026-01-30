import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

  const navigation = useNavigation();
  
  const data = {
    id : 10011,
    fname: 'Johnny',
    lname: 'Sims'
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Profile', { data })}>
        <Text style={styles.btnText}>Login Now</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

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