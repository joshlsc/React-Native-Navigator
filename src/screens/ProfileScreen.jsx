import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {

  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.btnText}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen

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