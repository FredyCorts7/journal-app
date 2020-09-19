import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { firebase } from '../firebase/config';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsAuthenticated(true);
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
          <Route path='/auth' component={AuthRouter} />
          <Route exact path='/' component={JournalScreen} />

          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  );
};
