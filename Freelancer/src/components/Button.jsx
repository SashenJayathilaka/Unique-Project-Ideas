/* eslint-disable no-undef */
import React, { useState } from "react";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import KebabDiningIcon from "@mui/icons-material/KebabDining";

const Button = ({ setValue }) => {
  return (
    <div className="flex space-x-2 justify-center mt-5">
      <button
        onClick={() => setValue("Breakfast")}
        type="button"
        className="inline-block px-14 py-8 bg-black text-white font-medium text-xl rounded-lg leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        <BreakfastDiningIcon className="mr-5" />
        Breakfast
      </button>
      <button
        onClick={() => setValue("Lunch")}
        type="button"
        className="inline-block px-14 py-8 bg-black text-white font-medium text-xl rounded-lg leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        <DinnerDiningIcon className="mr-5" />
        Lunch
      </button>

      <button
        onClick={() => setValue("Dinner")}
        type="button"
        className="inline-block px-14 py-8 bg-black text-white font-medium text-xl rounded-lg leading-tight uppercase  shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        <KebabDiningIcon className="mr-5" />
        Dinner
      </button>
    </div>
  );
};

export default Button;
