import React from "react";
import { motion } from "framer-motion";

const adData = [
  {
    image:
      "https://allma.si/blog/wp-content/uploads/2022/02/flipping-cards-in-memory-game.gif",
    isTrue: false,
  },
  {
    image: "https://media.giphy.com/media/8ocnwA1TT24Ss/giphy.gif",
    isTrue: true,
  },
  {
    image: "https://miro.medium.com/max/1400/1*dQzFEaAHwxouaImAuUd3EQ.gif",
    isTrue: false,
  },
];

function AdSide() {
  return (
    <>
      <div className="bg-[#015871]">
        <div className="flex space-x-8 justify-center mb-10 font-bold text-4xl text-[#fffeea] animate-pulse">
          <h1>Learn Game Development with JavaScript</h1>
        </div>
        <div className="flex justify-center gap-5 pb-20">
          {adData.map((data, index) => (
            <div key={index}>
              <motion.img
                initial={{
                  x: data.isTrue ? 200 : -200,
                  opacity: 0,
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={data.image}
                style={{ width: "400px", height: "300px" }}
                className="rounded-md "
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AdSide;
