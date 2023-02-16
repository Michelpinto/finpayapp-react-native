import { StyleSheet } from 'react-native';

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
    marginBottom: 120,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    // fontFamily: 'comfortaa',
    marginBottom: 20,
  },

  Buttons: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttonRegister: {
    marginBottom: 20,
    backgroundColor: '#506D8B',
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 50,
    borderRadius: 5,
    color: '#fff',
    fontSize: 16,
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
});
