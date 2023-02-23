import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
});

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [failedLogin, setFailedLogin] = useState('');
  const [userLoading, setUserLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [balance, setBalance] = useState(0);
  const [isSessionExpired, setIsSessionExpired] = useState(false);

  const login = async (userData: { email: string; password: string }) => {
    try {
      setUserLoading(true);
      const { data } = await axios.post('http://localhost:6000/users/login', {
        ...userData,
      });
      // setIsSessionExpired(false);

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
      const { data } = await axios.get(
        `http://localhost:6000/balance/user/${id}`
      );
      setBalance(data.currentBalance);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    const user = await AsyncStorage.getItem('@finpayApp:user');
    if (user) {
      setUser(JSON.parse(user));
    }
  };

  const checkSession = async (password: string) => {
    // if (user) {
    //   await axios.post('http://localhost:6000/users/login', {
    //     email: user.email,
    //     password: password,
    //   });
    //   setIsSessionExpired(false);
    //   getBalance(user.id);
    // }
  };

  // useEffect(() => {
  //   getBalance(user?.id || '');
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
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};
