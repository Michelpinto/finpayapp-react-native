import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  Div: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    // fontFamily: 'comfortaa',
    marginBottom: 20,
  },
  Image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    height: 50,
    marginBottom: 25,
    width: '100%',
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  Buttons: {
    width: '100%',
    flexDirection: 'column',
  },
  buttonLogin: {
    borderRadius: 5,
    backgroundColor: '#86929E',
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  logoutWrapper: {
    width: width - 32,
    height: 52,
    marginBottom: 32,
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
