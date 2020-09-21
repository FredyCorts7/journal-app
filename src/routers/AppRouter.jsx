import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAuthenticated(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsAuthenticated(false);
      }
      setChecking(false);
    }); //onAuthStateChanged is a observable like useEffect
  }, [dispatch, setChecking]); //because run just one time

  if (checking) {
    return <h1>Wait ...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            isAuthenticated={isAuthenticated}
            path='/auth'
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            isAuthenticated={isAuthenticated}
            path='/'
            component={JournalScreen}
          />

          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  );
};
