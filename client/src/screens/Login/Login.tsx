import React, { useContext, useEffect, useState } from 'react';
import LoginUI from './LoginUI';
import { ContextApi } from '../../context/ContextApi';

interface Props {
  navigation: any;
}

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const {
    login,
    user,
    userLoading,
    failedLogin,
    setFailedLogin,
    setIsSignedIn,
  } = useContext(ContextApi);

  const handleSubmit = async () => {
    if (!email || !password) {
      setEmail('');
      setPassword('');
      setErrorMsg('Please enter your email and password');
      setTimeout(() => setErrorMsg(''), 4000);
      return;
    }

    if (!login) return null;

    await login({ email, password });

    if (user) {
      setIsSignedIn(true);
      setEmail('');
      setPassword('');
    }
  };

  useEffect(() => {
    if (failedLogin) {
      setEmail('');
      setPassword('');
      setTimeout(() => {
        setFailedLogin && setFailedLogin('');
      }, 4000);
    }
  }, [failedLogin]);

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <LoginUI
      handleSubmit={handleSubmit}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleRegister={handleRegister}
      errorMsg={errorMsg || failedLogin}
      userLoading={userLoading}
    />
  );
};

export default Login;
