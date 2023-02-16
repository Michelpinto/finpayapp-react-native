import { NavigationContainer } from '@react-navigation/native';
import { ContextProvider } from './src/context/ContextApi';
import Route from './src/routes/Route';

function App() {
  return (
    <ContextProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </ContextProvider>
  );
}

export default App;
