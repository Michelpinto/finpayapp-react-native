import { useCallback, useContext } from 'react';
import { ContextApi } from '../context/ContextApi';
import SessionExpired from '../screens/SessionExpired/SessionExpired';
import Start from '../screens/Start/Start';
import { RouteStack, RouteStartStack } from './RouteStack';
import { BottomTab } from './RouteTab';

const Route = () => {
  const { user, isSessionExpired, isSignedIn } = useContext(ContextApi);

  const handleHomeScreen = () => {
    if (isSignedIn) {
      return <RouteStack />;
    }
  };

  const handleLoginScreen = () => {
    if (user === null && !isSignedIn && isSessionExpired === false) {
      return <RouteStartStack />;
    }
  };

  const handleSessionExpired = () => {
    if (isSessionExpired === true) {
      return <SessionExpired />;
    }
  };

  return <>{isSignedIn ? <RouteStack /> : <RouteStartStack />}</>;
  //
};

export default Route;
