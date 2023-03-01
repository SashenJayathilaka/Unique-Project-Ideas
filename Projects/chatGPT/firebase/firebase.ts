import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*  

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

*/

const firebaseConfig = {
  apiKey: "AIzaSyBRvvVbd3Tau_GuSWaWmAn-Wq4XOmLw8Bs",
  authDomain: "chatgpt-clone-33f8b.firebaseapp.com",
  projectId: "chatgpt-clone-33f8b",
  storageBucket: "chatgpt-clone-33f8b.appspot.com",
  messagingSenderId: "81370499461",
  appId: "1:81370499461:web:86b02d917e38c02c01dcec",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

// export
export { firestore };
