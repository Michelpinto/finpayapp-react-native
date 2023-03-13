import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

export interface IUser {
  email: string;
  id: string;
  name: string;
  token: string;
}

export interface PropsContext {
  user: null | IUser;
  failedLogin: string;
  login?: (userData: { email: string; password: string }) => Promise<void>;
  userLoading?: boolean;
  setFailedLogin: React.Dispatch<React.SetStateAction<string>>;
  balance: number;
  getBalance?: (id: string) => Promise<void>;
  checkSession: (password: string) => Promise<void>;
  isSessionExpired: boolean;
  setUserLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSessionExpired: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  userRemoved: boolean;
  setUserRemoved: React.Dispatch<React.SetStateAction<boolean>>;
}

interface Props {
  children: React.ReactNode;
}

export const ContextApi = createContext<PropsContext>({
  user: null,
  failedLogin: '',
  balance: 0,
  isSessionExpired: true,
  checkSession: () => new Promise(() => {}),
  setUserLoading: () => {},
  setFailedLogin: () => {},
  setIsSessionExpired: () => {},
  setUser: () => {},
  isSignedIn: false,
  setIsSignedIn: () => {},
  userRemoved: false,
  setUserRemoved: () => {},
});

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [failedLogin, setFailedLogin] = useState('');
  const [userLoading, setUserLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [balance, setBalance] = useState(0);
  const [isSessionExpired, setIsSessionExpired] = useState(false);
  const [userRemoved, setUserRemoved] = useState(false);

  const login = async (userData: { email: string; password: string }) => {
    try {
      setUserLoading(true);
      const { data } = await api.post('users/login', {
        ...userData,
      });
      setIsSessionExpired(false);

      const user = JSON.stringify({
        email: data?.email,
        id: data?._id,
        name: data?.name,
        token: data?.token,
      });

      getBalance(data?._id);

      await AsyncStorage.setItem('@finpayApp:user', user);
      setUser(JSON.parse(user));
      setIsSignedIn(true);
      setUserLoading(false);
    } catch (error: any) {
      setUserLoading(false);
      setFailedLogin("Sorry, we couldn't log you in. Please try again.");
    }
  };

  const getBalance = async (id: string) => {
    try {
      const { data } = await api.get(`balance/user/${id}`);
      setBalance(data.currentBalance);
    } catch (error) {
      console.log(error);
    }
  };

  const checkSession = async (password: string) => {
    if (user) {
      try {
        await api.post('users/login', {
          email: user.email,
          password,
        });
        setIsSessionExpired(false);
        getBalance(user.id);
      } catch (error) {
        console.log(error);
        setIsSessionExpired(true);
      }
    }
  };

  const removeUser = async () => {
    await AsyncStorage.removeItem('@finpayApp:user');
    setUserRemoved(true);
  };

  // useEffect(() => {
  //   const sessionTimeout = setTimeout(() => {
  //     removeUser();
  //     setIsSessionExpired(true);
  //     setIsSignedIn(false);
  //   }, 1000);

  //   console.log('user', user);
  //   return () => clearTimeout(sessionTimeout);
  // }, [user]);

  return (
    <ContextApi.Provider
      value={{
        failedLogin,
        login,
        userLoading,
        setFailedLogin,
        user,
        balance,
        getBalance,
        checkSession,
        isSessionExpired,
        setUserLoading,
        setIsSessionExpired,
        setUser,
        isSignedIn,
        setIsSignedIn,
        userRemoved,
        setUserRemoved,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
