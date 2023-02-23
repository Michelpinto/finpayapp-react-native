import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { styles } from './emptyStateStyles';

const EmptyState: React.FC = () => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('SendMoney', { screen: 'SendMoney' });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>
        You have no transaction history, start sending money!
      </Text>

      <TouchableOpacity
        onPress={handlePress}
        style={[styles.button, styles.shadow]}
      >
        <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>
          Send Money
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyState;
