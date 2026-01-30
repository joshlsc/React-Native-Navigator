import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen'
import ProfileStackScreen from './ProfileStackScreen'
import { Lucide } from '@react-native-vector-icons/lucide'

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen 
        name='HomeStack' 
        component={HomeStackScreen} 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Lucide name='house' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name='ProfileStack' 
        component={ProfileStackScreen} 
        options={{ 
          title: 'Profile' ,
          tabBarIcon: ({ color, size }) => (
            <Lucide name='user' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabs;