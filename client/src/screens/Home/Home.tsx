import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeUI from './HomeUI';
import { ContextApi } from '../../context/ContextApi';

const Home: React.FC = ({ navigation, route }: any) => {
  const { user, balance } = useContext(ContextApi);

  const logout = () => {
    navigation.navigate('Login');
    AsyncStorage.removeItem('@finpayApp:user');
  };

  return user && <HomeUI name={user.name} logout={logout} balance={balance} />;
};

export default Home;
