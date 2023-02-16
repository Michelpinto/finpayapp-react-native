import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import SendMoney from '../screens/SendMoney/SendMoney';

const bottomTab = createBottomTabNavigator();

export function BottomTab() {
  return (
    <bottomTab.Navigator initialRouteName='Home'>
      <bottomTab.Screen
        options={{
          headerShown: false,
        }}
        name='Home'
        component={Home}
      />
      <bottomTab.Screen
        options={{
          headerShown: false,
        }}
        name='SendMoney'
        component={SendMoney}
      />
    </bottomTab.Navigator>
  );
}
