import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 120,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    marginBottom: 50,
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
    width: '100%',
    height: 50,
    color: '#fff',
    fontSize: 16,
  },
  Div: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
  },
  errorMessage: {
    color: 'red',
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
});
