import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import { styles } from './emptyStateStyles';

interface Props {
  loading: boolean;
}

const EmptyState: React.FC<Props> = ({ loading }) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('SendMoney', { screen: 'SendMoney' });
  };

  return (
    <>
      {loading === true ? (
        <ActivityIndicator
          style={{ marginTop: 50 }}
          size='large'
          color='#506D8B'
        />
      ) : (
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
      )}
    </>
  );
};

export default EmptyState;
