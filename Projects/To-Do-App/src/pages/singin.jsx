import { doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import OAuthButtons from "../components/OAuthButtons";
import { auth, firestore } from "../firebase/firebase";

function Singing({ setIsSignIn }) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setUserPassword] = useState("");

  /* const [error, setError] = useState(""); */

  const [createUserWithEmailAndPassword, userCred, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);

  /* console.log(userName); */

  const onSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
    if (userError) {
      alert(userError);
    }
  };

  const createUserDocument = async (user) => {
    const userDocRef = doc(firestore, "users", user.uid);
    await setDoc(userDocRef, JSON.parse(JSON.stringify(user)));
  };

  /* console.log(userCred.user.uid); */

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

  return (
    <section className=" bg-gray-900 md:h-screen lg:h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              style={{ width: "600px" }}
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              //className="w-90"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <div className="text-white flex justify-center m-5">
              <h1 className="font-bold text-2xl">Sign Up</h1>
            </div>

            <form>
              <OAuthButtons />

              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center text-gray-300 font-semibold mx-4 mb-0">
                  OR
                </p>
              </div>

              <div className="mb-6">
                <div className="flex mb-6">
                  <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    className="form-control mr-5 block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="User Name"
                  />
                  <input
                    value={userAge}
                    onChange={(e) => setUserAge(e.target.value)}
                    type="number"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Age"
                  />
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6">
                <input
                  value={password}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div className="text-center lg:text-left">
                <button
                  onClick={onSubmit}
                  style={{ borderRadius: "20px" }}
                  type="button"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Sign Up
                </button>
                <p className="text-sm text-teal-200 font-semibold mt-2 pt-1 mb-0">
                  Already have an account?
                  <a
                    onClick={() => setIsSignIn(true)}
                    className="text-red-400 hover:text-red-600 focus:text-red-600 cursor-pointer transition duration-200 ease-in-out"
                  >
                    {" "}
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Singing;
