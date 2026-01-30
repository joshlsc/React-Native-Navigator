import { Alert, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { products } from '../assets/data/products'

const ProductsScreen = () => {

  const handleAddToCart = (item) => {
    Alert.alert(`${item} has been added to your cart!`);
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>Price: ₱{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCartBtn} onPress={() => handleAddToCart(item.name)}>
              <Text style={styles.btnText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  itemName: { 
    fontSize: 20 
  },
  itemPrice: { 
    fontSize: 16,
    color: '#1a76eeff' 
  }, 
  addToCartBtn: {
    backgroundColor: '#1a76eeff',
    padding: 10,
    borderRadius: 8,
    width: 100,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  }
})