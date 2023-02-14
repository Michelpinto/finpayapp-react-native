import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { styles } from './styles';

interface SendMoneyUIProps {
  email: string;
  receiver: string;
  setReceiver: (receiver: string) => void;
  amount: string;
  setAmount: (amount: string) => void;
  loading: boolean;
  sendMoney: () => void;
  balance: number;
}

const SendMoneyUI: React.FC<SendMoneyUIProps> = ({
  email,
  receiver,
  amount,
  setAmount,
  setReceiver,
  loading,
  sendMoney,
  balance,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.balanceText}>$ {balance}.00</Text>
      <Image
        style={styles.Image}
        source={require('../../../assets/sendMoneyAsset.png')}
      />

      <Text style={styles.welcomeText}>Send money to friends and family</Text>
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
          style={{ color: 'white', fontWeight: '600', textAlign: 'center' }}
        >
          {loading ? <ActivityIndicator color={'white'} /> : 'Send money'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SendMoneyUI;
