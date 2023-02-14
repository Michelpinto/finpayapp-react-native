import axios from 'axios';
import React, { useState } from 'react';
import SendMoneyUI from './SendMoneyUI';
import { Alert } from 'react-native';

// import { Container } from './styles';

const SendMoney: React.FC = ({ navigation, route }: any) => {
  const { email, id } = route.params || {};
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);
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

  return (
    <SendMoneyUI
      email={email}
      receiver={receiver}
      setReceiver={setReceiver}
      amount={amount}
      setAmount={setAmount}
      loading={loading}
      sendMoney={sendMoney}
    />
  );
};

export default SendMoney;
