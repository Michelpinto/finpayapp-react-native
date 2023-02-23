import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import EmptyState from '../../components/emptyState';
import { styles } from './movStyles';

interface Props {
  movements: any[];
}

const MovementsUI: React.FC<Props> = ({ movements }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../../../assets/movementsAsset.png')}
      />
      <Text style={styles.text}>Past transactions</Text>
      {movements.length > 0 ? (
        movements.map((movement) => (
          <View
            key={movement.index}
            style={[styles.itemContainer, styles.shadowProp]}
          >
            <Text
              style={{
                marginBottom: 5,
                color: movement.balance > 0 ? 'green' : 'red',
              }}
            >
              {movement.balance > 0
                ? `Received $${movement.balance}.00`
                : `Sent $${movement.balance}.00`}
            </Text>
            <Text style={{ color: 'grey' }}>{movement.date.split('T')[0]}</Text>
          </View>
        ))
      ) : (
        <EmptyState />
      )}
    </View>
  );
};

export default MovementsUI;
