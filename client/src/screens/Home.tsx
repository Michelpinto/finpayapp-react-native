import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

interface Props {
  navigation: any;
}

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello world! This is home page</Text>

      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
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
});
