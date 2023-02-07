import React from 'react';

import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './loginStyles';

interface Props {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSubmit: () => void;
}

const LoginUI: React.FC<Props> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View>
        <TextInput
          onChangeText={(email) => setEmail(email)}
          value={email}
          style={styles.input}
          placeholder='Email address'
          autoCapitalize='none'
        />
        <TextInput
          onChangeText={(password) => setPassword(password)}
          value={password}
          secureTextEntry={true}
          style={styles.input}
          placeholder='Enter your password'
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
          Login
        </Text>
      </TouchableOpacity>

      <View style={styles.Div}>
        <Text style={styles.linkText}>Don't have an account?</Text>
        <Button title='Register here' />
      </View>
    </View>
  );
};

export default LoginUI;
