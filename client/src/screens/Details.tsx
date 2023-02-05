import React, { useState, useEffect } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('screen');

const Details: React.FC = ({ navigation, route }: any) => {
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
    navigation.navigate('Home');
    AsyncStorage.removeItem('@finpayApp:user');
  };

  useEffect(() => {
    getBalance();
  }, [id]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoutWrapper}>
        <TouchableOpacity onPress={logout} style={styles.logout}>
          <Text style={{ fontWeight: 'bold' }}>Log out</Text>
        </TouchableOpacity>
      </View>

      <Text>{`Hello ${name}! welcome, your balance is ${balance}`}</Text>
      <View style={styles.card}>
        <TextInput
          onChangeText={(email) => setReceiver(email)}
          value={receiver}
          style={styles.input}
          placeholder='Email'
          autoCapitalize='none'
        />
        <TextInput
          onChangeText={(amount) => setAmount(amount)}
          value={amount}
          style={styles.input}
          placeholder='Amount'
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => !loading && sendMoney()}
        >
          <Text
            style={{ color: 'white', fontWeight: '600', alignItems: 'center' }}
          >
            {loading ? <ActivityIndicator color={'white'} /> : 'Send money'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    width: '100%',
  },
  card: {
    width: width - 32,
    // height: height / 6,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  button: {
    width: '50%',
    height: 40,
    backgroundColor: '#89CFF0',
    marginBottom: 16,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutWrapper: {
    width: width - 32,
    height: 52,
    marginBottom: 32,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logout: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 10,
  },
});
