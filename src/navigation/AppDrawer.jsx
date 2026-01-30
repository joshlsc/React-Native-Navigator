import { createDrawerNavigator } from '@react-navigation/drawer';
import AppTabs from "./AppTabs"

const Drawer = createDrawerNavigator();

export default function AppDrawer() {
  return (
    <Drawer.Navigator 
      initialRouteName="MainTabs"
      screenOptions={{
        drawerLabelStyle: { fontSize: 14, fontWeight: '400' },
        drawerStyle: { width: 280, borderTopRightRadius: 0, borderBottomRightRadius: 0 },
        drawerItemStyle: {
          borderRadius: 8,
        },
      }}
    >
      <Drawer.Screen 
        name="MainTabs" 
        component={AppTabs} 
        options={{ title: 'Home' }} 
      />
      <Drawer.Screen 
        name="ProfileDrawerLink" 
        component={AppTabs} // Point this to the Tab Navigator
        options={{ title: 'Profile' }}
        listeners={({ navigation }) => ({
          drawerItemPress: (e) => {
            // Prevent default behavior and jump to the specific tab
            e.preventDefault();
            navigation.navigate('MainTabs', { screen: 'ProfileStack' });
          },
        })}
      />
    </Drawer.Navigator>
  )
}