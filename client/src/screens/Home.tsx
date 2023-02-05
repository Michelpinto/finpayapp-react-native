import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
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

      navigation.navigate('Details', {
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
    <View style={styles.container}>
      <TextInput
        onChangeText={(email) => setEmail(email)}
        value={email}
        style={styles.input}
        placeholder='Email'
        autoCapitalize='none'
      />
      <TextInput
        onChangeText={(password) => setPassword(password)}
        value={password}
        secureTextEntry={true}
        style={styles.input}
        placeholder='Password'
      />

      <Button title='Login' onPress={handleSubmit} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
  },
});
