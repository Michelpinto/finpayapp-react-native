import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterUI from './RegisterUI';
import { api } from '../../services/api';

interface Props {
  navigation: any;
}

const Register: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async () => {
    try {
      if (!name || !email || !password) {
        setEmail('');
        setPassword('');
        setName('');
        setErrorMsg('All the fields are required');
        setTimeout(() => setErrorMsg(''), 4000);
        return;
      }

      const { data } = await api.post('users', {
        name,
        email,
        password,
      });

      const user = JSON.stringify({
        email: data?.email,
        id: data?._id,
        name: data?.name,
        token: data?.token,
      });

      await AsyncStorage.setItem('@finpayApp:user', user);

      navigation.navigate('Home', {
        email: data?.email,
        id: data?._id,
        name: data?.name,
      });

      setEmail('');
      setPassword('');
      setName('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <RegisterUI
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      email={email}
      setPassword={setPassword}
      password={password}
      setName={setName}
      name={name}
      handleLogin={handleLogin}
      errorMsg={errorMsg}
    />
  );
};

export default Register;
