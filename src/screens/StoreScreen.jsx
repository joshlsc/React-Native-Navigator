import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { storeInfo } from '../assets/data/products'
import { Lucide } from '@react-native-vector-icons/lucide'

const StoreScreen = () => {

  // console.log('Store:', storeInfo);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={{ uri : storeInfo.image }} />
      </View>
      <Text style={styles.name}>{storeInfo.name}</Text>
      <Text style={styles.location}>{storeInfo.location}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{storeInfo.rating} </Text>
        <Lucide name='star' size={42} color='#fbdf06' />
      </View>
    </View>
  )
}

export default StoreScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center'
  },
  imgContainer: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 300,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '800',
  },
  location: {
    color: '#929292ff',
    fontSize: 18
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 2,
  },
  rating: {
    color: '#f2ce03ff',
    fontSize: 52,
    fontWeight: '800',
  }
})