import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "crwn-clothing-a6a34.firebaseapp.com",
  databaseURL: "https://crwn-clothing-a6a34.firebaseio.com",
  projectId: "crwn-clothing-a6a34",
  storageBucket: "crwn-clothing-a6a34.appspot.com",
  messagingSenderId: "925761248619",
  appId: "1:925761248619:web:761a85ce3db6c6b761c02e",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
