import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
SwiperCore.use([EffectCoverflow, Pagination]);

type Props = {
  searchResults: any;
};

const OpenCard = ({ searchResults }: Props) => {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {searchResults.map((item: any) => (
            <SwiperSlide
              key={item._id}
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "300px",
                height: "auto",
              }}
            >
              <div className="swiper-slide">
                <div className="bg-[#17141d] rounded-md">
                  <Link href={item.live}>
                    <div className="flex justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <img
                          className="w-40 h-40 rounded-md mt-5 mb-5"
                          src={item.image}
                          alt={item.name}
                        />
                      </motion.button>
                    </div>
                  </Link>
                  <div className="flex justify-center font-semibold text-white text-2xl">
                    <h3>{item.name}</h3>
                  </div>
                  {item.live === "#" ? (
                    <div className="flex justify-center m-5">
                      <button
                        type="button"
                        className="cursor-not-allowed inline-block px-6 py-2.5 bg-transparent text-red-500 font-medium text-xs leading-tight uppercase rounded-md shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Live Demo Not Available
                      </button>
                    </div>
                  ) : (
                    <Link href={item.live}>
                      <div className="flex justify-center m-5">
                        <button
                          type="button"
                          className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out hover:animate-bounce"
                        >
                          Live Demo
                        </button>
                      </div>
                    </Link>
                  )}

                  <Link href={item.github}>
                    <div className="flex justify-center pb-2">
                      <button
                        type="button"
                        className="inline-block px-6 py-2  text-blue-400 font-semibold text-xs leading-tight uppercase rounded-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                      >
                        Source Code
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default OpenCard;
