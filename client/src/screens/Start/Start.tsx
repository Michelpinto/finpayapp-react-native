import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './startStyles';

interface Props {
  navigation: any;
}

const Start: React.FC<Props> = ({ navigation }) => {
  const handleClickLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.Div}>
        <Text style={styles.title}>Fin-Pay</Text>
        <Text style={{ textAlign: 'center', fontSize: 16 }}>
          Send and receive money from your loved ones any time of the day
        </Text>
      </View>

      <View style={styles.Buttons}>
        <TouchableOpacity style={styles.buttonRegister}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleClickLogin} style={styles.buttonLogin}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;
