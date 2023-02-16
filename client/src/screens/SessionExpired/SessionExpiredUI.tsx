import React, { useContext } from 'react';
import { Image, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { ContextApi, IUser } from '../../context/ContextApi';

import { styles } from './SessionStyles';

interface Props {
  user: IUser | null;
  userLoading?: boolean;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSession: () => void;
  logout: () => void;
}

const SessionExpiredUI: React.FC<Props> = ({
  user,
  userLoading,
  password,
  setPassword,
  handleSession,
  logout,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoutWrapper}>
        <TouchableOpacity onPress={logout} style={styles.logout}>
          <Text style={{ fontWeight: 'bold', color: 'white' }}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Div}>
        <Text style={styles.title}>Fin-Pay</Text>
        <Image
          style={styles.Image}
          source={require('../../../assets/SessionExpired.png')}
        />
      </View>

      <Text style={styles.welcomeText}>Welcome back, {user?.name}</Text>

      <View style={styles.Buttons}>
        <TextInput
          onChangeText={(password) => setPassword(password)}
          value={password}
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter your password'
        />
        <TouchableOpacity onPress={handleSession} style={styles.buttonLogin}>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>
            {userLoading ? `Loading...` : `Login`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SessionExpiredUI;
