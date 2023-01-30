import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Details: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world! This is Details page</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
