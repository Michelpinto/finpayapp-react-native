import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 120,
    paddingHorizontal: 20,
  },
  balanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'green',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    marginBottom: 25,
    width: '100%',
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#506D8B',
    paddingHorizontal: 10,
    paddingVertical: 15,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  Image: {
    marginBottom: 30,
  },

  error: {
    color: 'red',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
  },
  // logoutWrapper: {
  //   width: width - 32,
  //   height: 52,
  //   marginBottom: 32,
  //   flexDirection: 'row',
  //   justifyContent: 'flex-end',
  // },
  // logout: {
  //   borderWidth: 2,
  //   paddingHorizontal: 10,
  //   paddingVertical: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: 42,
  //   borderRadius: 10,
  //   backgroundColor: '#1d1d1d',
  //   color: '#fff',
  // },
});
