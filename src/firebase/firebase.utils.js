import firebase from 'firebase/app';
import 'firebase/firestore'; //importing database
import 'firebase/auth'; //importing authentication 

const config = {
    apiKey: "AIzaSyC0cS9cuK8aJzhYv7rR808Y6voZXw0emf4",
    authDomain: "crwn-db-9bb95.firebaseapp.com",
    databaseURL: "https://crwn-db-9bb95.firebaseio.com",
    projectId: "crwn-db-9bb95",
    storageBucket: "crwn-db-9bb95.appspot.com",
    messagingSenderId: "1081838508883",
    appId: "1:1081838508883:web:fe5b26c63a54b3877ddfa6",
    measurementId: "G-H404R5WBVH"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; //in case we need whole library