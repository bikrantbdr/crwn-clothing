import firebase from 'firebase/app';
import'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyB05fBtD9vPlPvt5xs20U12mMElsYgEWbo",
    authDomain: "crwn-db-6479f.firebaseapp.com",
    databaseURL: "https://crwn-db-6479f.firebaseio.com",
    projectId: "crwn-db-6479f",
    storageBucket: "crwn-db-6479f.appspot.com",
    messagingSenderId: "719801639417",
    appId: "1:719801639417:web:5b0db4c48bae245a9a1d28",
    measurementId: "G-4FC3N2L3VX"
  };

  firebase.initializeApp(config);

  export const auth =firebase.auth();
  export const firestore =firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle= ()=> auth.signInWithPopup(provider);

  export default firebase;
