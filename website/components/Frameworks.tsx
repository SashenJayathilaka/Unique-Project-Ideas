import React from "react";
import { motion } from "framer-motion";

type Props = {
  image: any;
  name: string;
  isTrue: boolean;
};

export default function Frameworks({ image, name, isTrue }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <>
        <motion.img
          initial={{
            x: isTrue ? 200 : -200,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, x: 0 }}
          src={image}
          className="rounded-full border border-gray-500 object-cover w-24 h-24  xl:w-32
        xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div
          className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
      group-hover:bg-white h-24 w-24  xl:w-32 xl:h-32 rounded-full z-0"
        >
          <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{name}</p>
          </div>
        </div>
      </>
    </div>
  );
}
