import { Text, TouchableOpacity, Alert, StyleSheet } from 'react-native'

export default function CustomButton2({ title }) {

  const handlePress = () => {
    return (
      Alert.alert('You pressed', title)
    )
  }

  return (
    <TouchableOpacity style={styles.btn} onPress={handlePress}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: { 
    backgroundColor: '#2a6beeff', 
    padding: 10, 
    borderRadius: 12, 
    marginBottom: 10, 
    marginHorizontal: 10 
  },
  btnText: { 
    textAlign: 'center', 
    color: '#fff', 
    fontSize: 16 
  }
})