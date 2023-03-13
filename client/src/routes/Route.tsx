import { useCallback, useContext, useEffect, useState } from 'react';
import { ContextApi } from '../context/ContextApi';
import SessionExpired from '../screens/SessionExpired/SessionExpired';
import Start from '../screens/Start/Start';
import { RouteStack, RouteStartStack } from './RouteStack';
import { BottomTab } from './RouteTab';

const Route = () => {
  const { user, isSessionExpired, isSignedIn, userRemoved } =
    useContext(ContextApi);

  const handleHomeScreen = useCallback(() => {
    if (isSignedIn) {
      return <BottomTab />;
    }
  }, [isSignedIn]);

  const handleLoginScreen = useCallback(() => {
    if (user === null && !isSignedIn && isSessionExpired === false) {
      return <RouteStartStack />;
    }
  }, [isSessionExpired, isSignedIn, user]);

  const handleSessionExpired = useCallback(() => {
    if (isSessionExpired === true) {
      return <SessionExpired />;
    }
  }, [isSessionExpired]);

  return (
    <>
      {/* {handleHomeScreen()}
      {handleLoginScreen()}
      {handleSessionExpired()} */}
      {isSignedIn ? <RouteStack /> : <RouteStartStack />}
    </>
  );
  //
};

export default Route;
