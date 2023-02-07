import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Login from './src/screens/Login/Login';
import Start from './src/screens/Start/Start';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Start'
          component={Start}
        />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='Home'
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
