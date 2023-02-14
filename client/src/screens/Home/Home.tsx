import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeUI from './HomeUI';

const Home: React.FC = ({ navigation, route }: any) => {
  const { id, name } = route.params || {};
  const [balance, setBalance] = useState(0);

  const getBalance = async () => {
    try {
      console.log('id', id);
      const { data } = await axios.get(
        `http://localhost:6000/balance/user/${id}`
      );
      setBalance(data.balance);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    navigation.navigate('Login');
    AsyncStorage.removeItem('@finpayApp:user');
  };

  useEffect(() => {
    getBalance();
  }, [id]);

  return <HomeUI name={name} logout={logout} balance={balance} />;
};

export default Home;
