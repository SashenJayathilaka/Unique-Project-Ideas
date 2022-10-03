import Link from "next/link";
import { useState } from "react";
import OpenCard from "./OpenCard";
import { motion } from "framer-motion";

type Props = {
  searchResults: any;
};

export default function ReactCard({ searchResults }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  var searchData = searchResults.slice(0, 5);

  return (
    <div className="bg-[#015871] pb-20">
      <div className="flex space-x-8 justify-center mb-20 font-bold text-4xl text-[#fffeea] animate-bounce">
        <h1>Reactjs Clone Open Source Projects</h1>
      </div>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container">
            {searchData.map((data: any, index: string) => (
              <div className="card" key={data._id}>
                <h3 className="title">{data.name}</h3>
                <div className="bar">
                  <div className="emptybar"></div>
                  <div className="filledbar"></div>
                </div>
                <Link href={data.live}>
                  <div className="flex justify-center m-auto pt-28 pb-10 cursor-pointer">
                    <img
                      style={{ width: "150px", height: "auto" }}
                      className="rounded-lg"
                      src={data.image}
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {isOpen ? (
        <>
          <OpenCard searchResults={searchResults} />

          <div className="flex space-x-8 justify-center mt-14">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="inline-block px-6 py-2.5 text-2xs text-teal-50 font-bold leading-tight uppercase shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 w-60 rounded-full"
            >
              Close
            </button>
          </div>
        </>
      ) : (
        <div className="flex space-x-8 justify-center mt-14">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="inline-block px-6 py-2.5 text-2xs text-teal-50 font-bold leading-tight uppercase shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 w-60 rounded-full"
          >
            More + {searchResults.length}
          </button>
        </div>
      )}
    </div>
  );
}
