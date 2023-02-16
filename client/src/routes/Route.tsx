import { useCallback, useContext } from 'react';
import { ContextApi } from '../context/ContextApi';
import SessionExpired from '../screens/SessionExpired/SessionExpired';
import Start from '../screens/Start/Start';
import { RouteStack, RouteStartStack } from './RouteStack';
import { BottomTab } from './RouteTab';

const Route = () => {
  const { user, sessionExpired, isSignedIn } = useContext(ContextApi);

  // const screenSelected = useCallback(() => {
  //   if (user === null && sessionExpired) {
  //     console.log(user, sessionExpired);
  //     return <SessionExpired />;
  //   } else if (user && sessionExpired === false) {
  //     console.log('home');
  //     return <RouteStartStack />;
  //   }
  //   console.log('login', user, sessionExpired);

  //   return <BottomTab />;
  // }, [user]);

  return isSignedIn ? <RouteStack /> : <RouteStartStack />;
};

export default Route;
