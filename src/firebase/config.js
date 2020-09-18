import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkrlmq3yxvWEHmmaG33AYS0DXtaY-aLPA',
  authDomain: 'react-apps-29eae.firebaseapp.com',
  databaseURL: 'https://react-apps-29eae.firebaseio.com',
  projectId: 'react-apps-29eae',
  storageBucket: 'react-apps-29eae.appspot.com',
  messagingSenderId: '308910714705',
  appId: '1:308910714705:web:ddf158a903b319ccb9ed70',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
