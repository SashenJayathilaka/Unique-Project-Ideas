import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import db from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (name && email && message) {
      try {
        db.collection("javaScript").add({
          name: name,
          email: email,
          message: message,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
      } catch (error) {
        console.log(error);
      }

      toast.success("Your Message is send!", {
        duration: 8000,
        style: {
          background: "#fff",
          color: "#015871",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
        },
      });

      setName("");
      setEmail("");
      setMessage("");
    } else {
      if (!name) {
        toast.error("Your Name field is empty", {
          duration: 3000,
          position: "bottom-right",
          style: {
            background: "#fff",
            color: "#015871",
            fontWeight: "bolder",
            fontSize: "17px",
            padding: "20px",
          },
        });
      } else if (!email) {
        toast.error("Email field is empty", {
          duration: 3000,
          position: "bottom-right",
          style: {
            background: "#fff",
            color: "#015871",
            fontWeight: "bolder",
            fontSize: "17px",
            padding: "20px",
          },
        });
      } else {
        toast.error("Message field is empty ", {
          duration: 3000,
          position: "bottom-right",
          style: {
            background: "#fff",
            color: "#015871",
            fontWeight: "bolder",
            fontSize: "17px",
            padding: "20px",
          },
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-2">
      <Toaster />
      <div className="block ml-24  p-6 rounded-lg shadow-2xl bg-[#015871]">
        <form>
          <div className="flex justify-center text-teal-100 font-semibold text-2xl mb-5">
            <h1>Contact Us</h1>
          </div>
          <div className="form-group mb-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name"
            />
          </div>
          <div className="form-group mb-6">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput8"
              placeholder="Email address"
            />
          </div>
          <div className="form-group mb-6">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleFormControlTextarea13"
              placeholder="Message"
            ></textarea>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
      <div className="flex justify-center m-auto">
        <img
          className="w-72 h-auto"
          src="https://pngimg.com/uploads/mario/mario_PNG59.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Contact;
