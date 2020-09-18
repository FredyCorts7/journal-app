import React, { useEffect } from 'react';
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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }
    }); //onAuthStateChanged is a observable like useEffect
  }, [dispatch]); //because run just one time

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
