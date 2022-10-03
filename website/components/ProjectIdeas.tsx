import React from "react";
import Project from "../ProjectData";

type Props = {};

export default function ProjectIdeas({}: Props) {
  return (
    <div className="bg-[#015871] pb-16">
      <div className="flex space-x-8 justify-center mb-20 font-bold text-4xl text-[#fffeea] animate-bounce">
        <h1>Javascript Project ideas For You</h1>
      </div>

      <div className="grid grid-cols-4 gap-8 items-center ml-8 mr-8">
        {Project.map((data, index) => (
          <div
            key={index}
            className="hover:shadow-2xl flex w-80 h-auto bg-transparent rounded-md text-white font-semibold hover:animate-pulse cursor-pointer"
          >
            <p className="ml-4 mt-4 mb-4">⚫</p>
            <p className="ml-2 mt-4 mb-4">{data.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
