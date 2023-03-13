import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 120,
    paddingHorizontal: 20,
  },
  img: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 15,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    width: '100%',
    height: 50,
    marginBottom: 15,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
