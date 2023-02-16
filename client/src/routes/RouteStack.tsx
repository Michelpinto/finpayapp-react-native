import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Start from '../screens/Start/Start';
import { BottomTab } from './RouteTab';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

export function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name='Login'
        component={Login}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name='Register'
        component={Register}
      />
    </AuthStack.Navigator>
  );
}

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
