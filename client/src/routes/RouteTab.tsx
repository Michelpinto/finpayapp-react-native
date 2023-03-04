import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Movements from '../screens/Movements/Movements';
import SendMoney from '../screens/SendMoney/SendMoney';
import { Ionicons } from '@expo/vector-icons';

const bottomTab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <bottomTab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#506D8B',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarStyle: {
          backgroundColor: '#fff',
          padding: 10,
          height: 90,
        },
      }}
    >
      <bottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home-outline' color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
        name='Home'
        component={Home}
      />
      <bottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='swap-horizontal' color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
        name='SendMoney'
        component={SendMoney}
      />
      <bottomTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='cash-outline' color={color} size={size} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
          },
        }}
        name='Movements'
        component={Movements}
      />
    </bottomTab.Navigator>
  );
}
