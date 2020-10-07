import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCENcorGFyXIW31K9ycDTx8KU8zgTYFEos",
  authDomain: "crown--clothing.firebaseapp.com",
  databaseURL: "https://crown--clothing.firebaseio.com",
  projectId: "crown--clothing",
  storageBucket: "crown--clothing.appspot.com",
  messagingSenderId: "1000216231535",
  appId: "1:1000216231535:web:e20447085cc3c03ee7179a",
  measurementId: "G-ZF62FSXEGT"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;