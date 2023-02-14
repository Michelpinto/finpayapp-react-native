import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home/Home';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import Start from './src/screens/Start/Start';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SendMoney from './src/screens/SendMoney/SendMoney';

const Stack = createStackNavigator();
const bottomTab = createBottomTabNavigator();

function App() {
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
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name='BottomTab'
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function BottomTab({ navigation, route }: any) {
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

export default App;
