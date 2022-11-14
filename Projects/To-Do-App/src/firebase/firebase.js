import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCicPy8qmI1wqzBIpe5wZvL0HLy5o0N3qo",
  authDomain: "blog-app-7be6c.firebaseapp.com",
  projectId: "blog-app-7be6c",
  storageBucket: "blog-app-7be6c.appspot.com",
  messagingSenderId: "940465942471",
  appId: "1:940465942471:web:70c152627222af94cef3e2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
