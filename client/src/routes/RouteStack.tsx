import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import SessionExpired from '../screens/SessionExpired/SessionExpired';
import Start from '../screens/Start/Start';
import { BottomTab } from './RouteTab';

const Stack = createStackNavigator();

export function RouteStartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Start'
        component={Start}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Login'
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='Register'
        component={Register}
      />
    </Stack.Navigator>
  );
}

export function RouteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name='BottomTab'
        component={BottomTab}
      />
    </Stack.Navigator>
  );
}
