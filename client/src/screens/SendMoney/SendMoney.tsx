import axios from 'axios';
import React, { useContext, useState } from 'react';
import SendMoneyUI from './SendMoneyUI';
import { Alert } from 'react-native';
import { ContextApi, IUser } from '../../context/ContextApi';

// import { Container } from './styles';

const SendMoney: React.FC = ({ navigation, route }: any) => {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('0');
  const [loading, setLoading] = useState(false);
  const { user, balance, getBalance } = useContext(ContextApi);

  const sendMoney = async () => {
    try {
      setLoading(true);
      await axios.post(`http://localhost:6000/balance/send`, {
        sender: user?.id,
        receiver,
        amount: Number(amount),
      });

      if (getBalance && user) {
        await getBalance(user.id);
      }

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
      email={user?.email}
      receiver={receiver}
      setReceiver={setReceiver}
      amount={amount}
      setAmount={setAmount}
      loading={loading}
      sendMoney={sendMoney}
      balance={balance}
    />
  );
};

export default SendMoney;
