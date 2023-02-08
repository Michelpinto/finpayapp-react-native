import React from 'react';
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './registerStyles';

interface RegisterUIProps {
  handleSubmit: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  name: string;
  setName: (name: string) => void;
}

const RegisterUI: React.FC<RegisterUIProps> = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  name,
  setName,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <View>
        <TextInput
          onChangeText={(name) => setName(name)}
          value={name}
          style={styles.input}
          placeholder='Name'
          autoCapitalize='none'
        />
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
          placeholder='Create password'
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={{ color: '#fff', fontSize: 16, textAlign: 'center' }}>
            Create account
          </Text>
        </TouchableOpacity>

        <View style={styles.Div}>
          <Text style={styles.linkText}>Already have an account?</Text>
          <Button title='Login here' />
        </View>
      </View>
    </View>
  );
};

export default RegisterUI;
