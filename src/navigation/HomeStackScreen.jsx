import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from '../screens/HomeScreen'
import DetailsScreen from '../screens/DetailsScreen'
import ProductsScreen from '../screens/ProductsScreen'
import StoreScreen from '../screens/StoreScreen'
import TaskManager from '../screens/TaskManager'

const HomeStack = createNativeStackNavigator()

export default function ProfileStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
      <HomeStack.Screen name="Products" component={ProductsScreen} />
      <HomeStack.Screen name="Store" component={StoreScreen} />
      <HomeStack.Screen name="TaskManager" component={TaskManager} />
    </HomeStack.Navigator>
  )
}
