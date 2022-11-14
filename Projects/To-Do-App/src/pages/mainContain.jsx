import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase/firebase";
import Login from "./login";
import Singing from "./singin";

function MainContain() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [user] = useAuthState(auth);
  const history = useHistory();

    useEffect(() => {
    if (user) {
      history.push(`/home/${user?.uid}`);
    } else return;
  }, [user]);

  return (
    <div>
      {isSignIn ? (
        <Login setIsSignIn={setIsSignIn} />
      ) : (
        <Singing setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

export default MainContain;
