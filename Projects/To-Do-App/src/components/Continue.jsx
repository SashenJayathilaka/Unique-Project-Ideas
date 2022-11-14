import { doc, setDoc } from "firebase/firestore";
import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";

function Continue() {
  const [signInWithGoogle, userCred, loading, error] =
    useSignInWithGoogle(auth);

  const createUserDocument = async (user) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

  return (
    <>
      <a
        onClick={() => signInWithGoogle()}
        className="px-7 py-3 text-gray-300 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg hover:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ borderRadius: "10px" }}
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        <img
          className="w-7 mr-5"
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
        />
        Continue with Google
      </a>
      <a
        className="px-7 py-3 text-gray-300 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg hover:bg-gray-600 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
        style={{ borderRadius: "10px" }}
        role="button"
        data-mdb-ripple="true"
        data-mdb-ripple-color="light"
      >
        Continue with other provider
      </a>
    </>
  );
}

export default Continue;
