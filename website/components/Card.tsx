import React from "react";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { motion } from "framer-motion";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

type CardProps = {};

const cardData = [
  {
    image:
      "https://www.pngplay.com/wp-content/uploads/11/Mario-PNG-Images-HD.png",
    color: "bg-pink-100",
    name: "Mario Game",
    description: "Mario Game with JavaScript and HTML Canvas",
    Link: "https://iridescent-crepe-c05125.netlify.app",
  },
  {
    image:
      "https://sihoonathan.github.io/rock-paper-scissors/assets/img/scissors.png",
    color: "bg-yellow-100",
    name: "Rock paper scissors",
    description: "Rock paper scissors with JavaScript and HTML Css",
    Link: "#",
  },
  {
    image:
      "https://mk0muwucepum99ape3ia.kinstacdn.com/wp-content/uploads/2018/02/memory-game-icon.png",
    color: "bg-pink-200",
    name: "Memory Games",
    description: "Memory Games with JavaScript and HTML Css",
    Link: "#",
  },
  {
    image:
      "https://www.casinogamblingstrategy.org/wp-content/uploads/2018/02/Blackjack-Strategy-238x300.png",
    color: "bg-blue-200",
    name: "Blackjack Game",
    description: "Blackjack Gamewith JavaScript and HTML Css",
    Link: "#",
  },
  {
    image:
      "http://clipartsign.com/upload/2016/01/27/cartoon-snakes-clip-art-page-2-snake-images-clipart-free-clip.png",
    color: "bg-gray-200",
    name: "Snake",
    description: "Snake Game with JavaScript and HTML Css",
    Link: "#",
  },
  {
    image: "https://art.pixilart.com/1bede42162fd121.png",
    color: "bg-orange-100",
    name: "Space Invaders",
    description: "Space Invaders with JavaScript and HTML Css",
    Link: "#",
  },
];

const Card: React.FC<CardProps> = () => {
  //key={index}

  const handleTostOpen = () => {
    toast.error("Sorry! Game is Currently Not Available", {
      duration: 3000,
      style: {
        background: "#fff",
        color: "#015871",
        fontWeight: "bolder",
        fontSize: "17px",
        padding: "20px",
        textAlign: "center",
      },
    });
  };

  return (
    <div className="bg-[#015871] pb-20">
      <div className="flex space-x-8 justify-center mb-20 font-bold text-6xl text-[#fffeea] animate-bounce">
        <h1>What will you build?</h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-3 gap-4 items-center">
          {cardData.map((data, index) => (
            <div key={index}>
              <div
                className={`block rounded-lg shadow-lg ${data.color} max-w-sm text-center mb-4 ml-10 mr-10`}
              >
                <div className="py-3 px-6 border-b border-gray-300 text-2xl">
                  <DirectionsRunIcon />
                </div>
                <div className="p-6">
                  <h5 className="text-gray-900 text-2xl font-medium mb-2">
                    {data.name}
                  </h5>

                  <div className="flex space-x-8 justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <img
                        style={{ width: "130px" }}
                        className="z-50 max-h-36"
                        src={data.image}
                        alt=""
                      />
                    </motion.button>
                  </div>
                  <p className="text-gray-700 text-base mb-4 mt-2">
                    {data.description}
                  </p>
                  {data.Link === "#" ? (
                    <button
                      onClick={handleTostOpen}
                      type="button"
                      className="inline-block px-6 py-2.5 text-xs text-teal-50 font-bold leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:animate-bounce"
                    >
                      Play
                    </button>
                  ) : (
                    <Link href={data.Link}>
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 text-xs text-teal-50 font-bold leading-tight uppercase rounded shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 hover:animate-bounce"
                      >
                        Play
                      </button>
                    </Link>
                  )}
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                  F u n J a v a S c r i p t <br /> PROJECTS
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="flex space-x-8 justify-center mt-14">
        <button
          type="button"
          className="inline-block px-6 py-2.5 text-2xs text-teal-50 font-bold leading-tight uppercase shadow-md focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out bg-gradient-to-r hover:from-green-400 hover:to-blue-500 from-pink-500 to-yellow-500 w-60 rounded-full"
        >
          More
        </button>
      </div>
    </div>
  );
};
export default Card;
