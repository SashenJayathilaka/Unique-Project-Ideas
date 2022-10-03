import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const [text, count] = useTypewriter({
    words: ["Biginer", "Fun!", "Developer", "Architect", "Designer", "2022"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="relative lg:pt-[80px] pb-80">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 px-4">
            <div className="hero-content">
              <h1
                className="
                  text-dark
                  font-bold
                  text-4xl
                  sm:text-[42px]
                  lg:text-[60px]
                  xl:text-[62px]
                  leading-snug
                  mb-3
                "
              >
                JavaScript <br />
                For
                <br />
                {text}
                <Cursor cursorColor="#F7AB0A" />
              </h1>
              <p className="text-base mb-8 text-body-color max-w-[480px]">
                {`JavaScript, often abbreviated to JS, is a programming language
                that is one of the core technologies of the World Wide Web,
                alongside HTML and CSS. As of 2022, 98% of websites use
                JavaScript on the client side for webpage behavior, often
                incorporating third-party libraries. All major web browsers have
                a dedicated JavaScript engine to execute the code on users'
                devices.`}
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="
                      py-4
                      px-6
                      sm:px-10
                      lg:px-8
                      xl:px-10
                      inline-flex
                      items-center
                      justify-center
                      text-center text-gray-500 font-semibold text-base
                      bg-primary
                      hover:bg-opacity-90
border border-indigo-500/100
                      rounded-lg
                    "
                  >
                    Get Started
                  </a>
                </li>
                {/*   <li>
                  <a
                    href="javascript:void(0)"
                    className="
                      py-4
                      px-6
                      sm:px-10
                      lg:px-8
                      xl:px-10
                      inline-flex
                      items-center
                      justify-center
                      text-center text-base
                      font-normal
                      text-body-color
                      hover:text-primary
                    "
                  >
                    <span className="mr-2">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                        <rect
                          x="6.90906"
                          y="13.3636"
                          width="8.18182"
                          height="1.63636"
                          fill="white"
                        />
                        <rect
                          x="10.1818"
                          y="6"
                          width="1.63636"
                          height="4.09091"
                          fill="white"
                        />
                        <path
                          d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    Download App
                  </a>
                </li> */}
              </ul>
              {/* <div className="clients pt-16">
                <div className="flex items-center">
                  <div className="w-full py-3 mr-4">
                    <img
                      src="https://th.bing.com/th/id/R.b8538125cbb29114a62062d82b2c861e?rik=vo60SDgTw8oQMw&pid=ImgRaw&r=0"
                      alt="ayroui"
                     
                    />
                  </div>
                  <div className="w-full py-3 mr-4">
                    <img
               
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
                      alt="graygrids"
                    />
                  </div>
                  <div className="w-full py-3 mr-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                      alt="uideck"
             
                    />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/12 px-4"></div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="lg:text-right lg:ml-auto">
              <div className="relative inline-block z-10 pt-11 lg:pt-0">
                {/*                 <motion.img
                  initial={{
                    x: 200,
                    opacity: 0,
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  src="https://www.freepnglogos.com/uploads/mario-png/mario-png-super-smash-bros-full-roster-leak-wiiu-10.png"
                  style={{ width: "260px" }}
                  className="max-w-full lg:ml-auto"
                /> */}
                <motion.img
                  initial={{
                    x: 200,
                    opacity: 0,
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  src="https://d3uom8aq23ax4d.cloudfront.net/wp-content/uploads/2021/03/software-and-website-development.svg.gzip"
                  className="max-w-full lg:ml-auto"
                />
                {/*                <img
                  src="https://d3uom8aq23ax4d.cloudfront.net/wp-content/uploads/2021/03/software-and-website-development.svg.gzip"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                /> */}
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
