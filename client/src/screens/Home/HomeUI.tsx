import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './homeStyles';

interface HomeUIProps {
  balance: number;
  logout: () => void;
  name: string;
}

const HomeUI: React.FC<HomeUIProps> = ({ logout, balance, name }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoutWrapper}>
        <TouchableOpacity onPress={logout} style={styles.logout}>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Fin-pay</Text>
      <Text style={styles.welcomeText}>{`Welcome, ${name} 🙋🏽‍♂️ `}</Text>
      <View style={styles.Div}>
        <Text style={styles.balanceText}>Your balance</Text>
        <Text style={styles.balance}>${balance}.00</Text>
        <Image source={require('../../../assets/balanceAsset.png')} />
      </View>
    </View>
  );
};

export default HomeUI;
