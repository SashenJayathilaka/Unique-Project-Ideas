import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Continue from "../components/Continue";
import { auth } from "../firebase/firebase";

function Login({ setIsSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setUserPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);

    if (error) {
      alert(error);
    }
  };

  return (
    <section className="h-full bg-gray-900">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <img
              style={{ width: "600px" }}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
              //className="w-90"
              alt="Phone image"
            />
          </div>

          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <div className="text-white flex justify-center m-5">
              <h1 className="font-bold text-4xl animate-bounce">
                Welcome back
              </h1>
            </div>

            <div className="text-white flex justify-center m-5">
              <h1 className="font-bold text-2xl">Sign in</h1>
            </div>

            <form>
              <div className="mb-6">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6">
                <input
                  value={password}
                  onChange={(e) => setUserPassword(e.target.value)}
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                  />
                  <label
                    className="form-check-label inline-block text-gray-200"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-blue-400 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Forgot password?
                </a>
              </div>
              <button
                onClick={onSubmit}
                type="submit"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                style={{ borderRadius: "10px" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Sign in
              </button>
              <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center text-gray-300 font-semibold mx-4 mb-0">
                  OR
                </p>
              </div>

              <Continue />
            </form>
            <p className="text-sm text-teal-200 font-semibold mt-2 pt-1 mb-0">
              Don't have an account?
              <a
                onClick={() => setIsSignIn(false)}
                className="text-red-400 hover:text-red-500 focus:text-red-500 cursor-pointer transition duration-200 ease-in-out"
              >
                {" "}
                Register
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
