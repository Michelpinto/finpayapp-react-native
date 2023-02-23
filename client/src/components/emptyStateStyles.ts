import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 60,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 10,
    backgroundColor: '#506D8B',
    color: '#fff',
  },
  shadow: {
    shadowOffset: { width: -2, height: 3 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
