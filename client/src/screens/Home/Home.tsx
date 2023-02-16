import React, { useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeUI from './HomeUI';
import { ContextApi } from '../../context/ContextApi';

const Home: React.FC = () => {
  const { user, balance, setUser, setIsSignedIn } = useContext(ContextApi);

  const logout = () => {
    AsyncStorage.removeItem('@finpayApp:user');
    setIsSignedIn(false);
    setUser(null);
  };

  return user && <HomeUI name={user.name} logout={logout} balance={balance} />;
};

export default Home;
