import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react';
import { Navigation } from 'swiper';
import { ContextApi } from '../../context/ContextApi';
import SessionExpiredUI from './SessionExpiredUI';

const SessionExpired: React.FC = () => {
  const [password, setPassword] = React.useState('');
  const {
    checkSession,
    user,
    userLoading,
    setFailedLogin,
    setUserLoading,
    setIsSessionExpired,
    setUser,
    setIsSignedIn,
  } = useContext(ContextApi);

  const handleSession = async () => {
    // try {
    //   setUserLoading(true);
    //   await checkSession(password);
    //   setIsSignedIn(true);
    //   setUserLoading(false);
    //   setIsSessionExpired(false);
    // } catch (error: any) {
    //   setUserLoading(false);
    //   setFailedLogin('Invalid password');
    //   setPassword('');
    //   setTimeout(() => {
    //     setFailedLogin && setFailedLogin('');
    //   }, 4000);
    // }
  };

  const logout = () => {
    AsyncStorage.removeItem('@finpayApp:user');
    setUser(null);
    setIsSessionExpired(false);
    setIsSignedIn(false);
  };

  return (
    <SessionExpiredUI
      user={user}
      userLoading={userLoading}
      password={password}
      setPassword={setPassword}
      handleSession={handleSession}
      logout={logout}
    />
  );
};

export default SessionExpired;
