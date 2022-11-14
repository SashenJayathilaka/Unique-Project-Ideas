import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { onSnapshot, query, collection, orderBy } from "firebase/firestore";
import { firestore } from "../firebase/firebase";
import ProfileModel from "./ProfileModel";

function ProfileSide({
  userName,
  logout,
  userEmail,
  speed,
  setIsOpen,
  isOpen,
}) {
  const [comments, setComments] = useState([]);

  /*   useEffect(
    () =>
      onSnapshot(query(collection(firestore, "users")), (snapshot) =>
        setComments(snapshot.docs)
      ),
    [firestore]
  );
 */
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:mx-2">
            <div className="bg-white p-3 border-t-4 border-green-400">
              <div className="image overflow-hidden">
                <img
                  className="h-auto w-full mx-auto rounded-full"
                  src={`https://avatars.dicebear.com/api/avataaars/${speed}.svg`}
                  /*                   src={
                    userPhoto
                      ? userPhoto
                      : `https://avatars.dicebear.com/api/avataaars/${speed}.svg`
                  } */
                  alt=""
                  onClick={logout}
                />
              </div>
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                {userName}
              </h1>
              <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {userEmail}
              </h3>
              <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                {faker.lorem.paragraph(2)}
              </p>
              <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li className="flex items-center py-3">
                  <span>Status</span>
                  <span className="ml-auto">
                    <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li className="flex items-center py-3">
                  <span>Member since</span>
                  <span className="ml-auto">Nov 07, 2016</span>
                </li>
              </ul>
              <ProfileModel setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>

            <div className="my-4"></div>

            <div className="bg-white p-3 hover:shadow">
              <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8">
                <span className="text-green-500">
                  <svg
                    className="h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                <span>Similar Profiles</span>
              </div>
              <div className="grid grid-cols-3">
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={`https://avatars.dicebear.com/api/avataaars/${faker.random.numeric()}.svg`}
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    {faker.name.findName()}
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={`https://avatars.dicebear.com/api/avataaars/${faker.random.numeric()}.svg`}
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    {faker.name.findName()}
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={`https://avatars.dicebear.com/api/avataaars/${faker.random.numeric()}.svg`}
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    {faker.name.findName()}
                  </a>
                </div>
                <div className="text-center my-2">
                  <img
                    className="h-16 w-16 rounded-full mx-auto"
                    src={`https://avatars.dicebear.com/api/avataaars/${faker.random.numeric()}.svg`}
                    alt=""
                  />
                  <a href="#" className="text-main-color">
                    {faker.name.findName()}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSide;
