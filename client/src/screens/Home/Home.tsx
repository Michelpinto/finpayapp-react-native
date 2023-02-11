import React, { useState, useEffect } from 'react';
import { Alert, Dimensions } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeUI from './HomeUI';

const { width, height } = Dimensions.get('screen');

const Home: React.FC = ({ navigation, route }: any) => {
  const { email, id, name } = route.params;
  const [balance, setBalance] = useState(0);
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);

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

  const sendMoney = async () => {
    try {
      setLoading(true);
      await axios.post(`http://localhost:6000/balance/send`, {
        sender: id,
        receiver,
        amount: Number(amount),
      });

      await getBalance();

      setReceiver('');
      setAmount('0');
      Alert.alert('Money sent successfully!');
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
