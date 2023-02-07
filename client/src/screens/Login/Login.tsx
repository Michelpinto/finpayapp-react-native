import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginUI from './LoginUI';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post('http://localhost:6000/users/login', {
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LoginUI
      handleSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
};

export default Login;
