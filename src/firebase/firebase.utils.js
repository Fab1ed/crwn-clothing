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
          createdAt, ...additionalData
        })
      } catch(error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
  } 

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; //in case we need whole library