import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAxCDPcrplX4A6chXcLqmUwNo3r4dlJAF4",
    authDomain: "facebook-messenger-clone-81f50.firebaseapp.com",
    projectId: "facebook-messenger-clone-81f50",
    storageBucket: "facebook-messenger-clone-81f50.appspot.com",
    messagingSenderId: "960238791254",
    appId: "1:960238791254:web:258fc915c6143a8258e9f7",
    measurementId: "G-MJCX7HEKC3"
});

const db = firebase.firestore();

export default db;