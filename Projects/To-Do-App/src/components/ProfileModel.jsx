import React from "react";

function ProfileModel({ setIsOpen, isOpen }) {
  return (
    <div className="flex space-x-2 justify-center mt-5">
      {isOpen ? (
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Close Your Profile
        </button>
      ) : (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out "
          data-bs-toggle="modal"
          data-bs-target="#exampleModalCenter"
        >
          Edit Your Profile
        </button>
      )}
    </div>
  );
}

export default ProfileModel;
