import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiUXK_0qv_UIsabR_AdLvjpnn7q9e4KUA",
    authDomain: "tinder-clone-ce8d7.firebaseapp.com",
    projectId: "tinder-clone-ce8d7",
    storageBucket: "tinder-clone-ce8d7.appspot.com",
    messagingSenderId: "1011891498066",
    appId: "1:1011891498066:web:a9bfa9fba4ddb386f7c38b",
    measurementId: "G-1XSRG7G0TT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;