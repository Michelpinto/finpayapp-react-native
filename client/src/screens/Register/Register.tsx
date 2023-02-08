import React, { useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterUI from './RegisterUI';

interface Props {
  navigation: any;
}

const Register: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    try {
      const { data } = await axios.post('http://localhost:6000/users', {
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

  return (
    <RegisterUI
      handleSubmit={handleSubmit}
      setEmail={setEmail}
      email={email}
      setPassword={setPassword}
      password={password}
      setName={setName}
      name={name}
    />
  );
};

export default Register;
