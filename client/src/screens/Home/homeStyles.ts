import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  balanceText: {
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center',
  },
  balance: {
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 20,
  },
  Div: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoutWrapper: {
    width: width - 32,
    height: 52,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  logout: {
    borderWidth: 2,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 10,
    backgroundColor: '#1d1d1d',
    color: '#fff',
  },
});
