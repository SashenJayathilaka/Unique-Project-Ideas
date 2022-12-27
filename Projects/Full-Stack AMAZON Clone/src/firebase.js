import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbzZROis3PWJ3wn2bQCYybtrQzJH7WyAI",
  authDomain: "clone-dd86d.firebaseapp.com",
  projectId: "clone-dd86d",
  storageBucket: "clone-dd86d.appspot.com",
  messagingSenderId: "775890508924",
  appId: "1:775890508924:web:8c8230319134c5bc17bdf9",
  measurementId: "G-CJNF4MVC32",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
