import React from "react";
import { signOut } from "next-auth/react";

type Props = {};

const LogoutButton = (props: Props) => {
  return (
    <button
      onClick={() => signOut()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
