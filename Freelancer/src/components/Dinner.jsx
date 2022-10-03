/* eslint-disable react-hooks/exhaustive-deps */
import LoopIcon from "@mui/icons-material/Loop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import images from "../data/breakfast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

/* const defaultItems = JSON.parse(localStorage.getItem('items')) || [];

const storeToStorage = items => {
  localStorage.setItem('items', JSON.stringify(items));
}; */

function Dinner({ value }) {
  const [items] = useState(images);
  const [inputValue, setInputValue] = useState("");
  const [randomItems, setRandomItems] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const randomized = () => {
    for (let i = 0; i < 60; i++) {
      setTimeout(pickRandomItem, 100 * i + 100);
    }
    setTimeout(() => {
      setIsShow(true);
      handleOpen();
    }, 7000);
  };

  const pickRandomItem = () => {
    setIsShow(false);
    const randomItem = items[Math.floor(Math.random() * items.length)];

    if (items) {
      setRandomItems(randomItem.image);
      setInputValue(randomItem.name);
    }
  };

  /*   useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
      handleOpen()
    }, 8000);
  }, []); */

  return (
    <>
      <section className="overflow-hidden text-gray-700 ">
        <div className="flex justify-center animate-bounce text-5xl font-bold mt-5">
          <h1>{value}</h1>
        </div>
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <div className="grid grid-cols-5 gap-2 items-center">
            {items.map((item, index) => (
              <>
                {item.image === randomItems ? (
                  <div className="items" key={index}>
                    <img
                      src={item.image}
                      alt="kitty"
                      className="w-64 h-52 cursor-pointer border-8 border-red-500 rounded-md"
                    />
                    <div className="overlay item__overlays animate-ping cursor-pointer">
                      <div className="item__content-wrap">
                        <div className="item__icons"></div>
                        <h3 className="item__titles">{item.name}</h3>
                        <h5 className="item__genres">Wordpress</h5>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="item" key={index}>
                    <img
                      src={item.image}
                      alt="kitty"
                      className="w-64 h-52 cursor-pointer rounded-md"
                    />
                    <div className="overlay item__overlay">
                      <div className="item__content-wrap">
                        <div className="item__icon"></div>
                        <h3 className="item__title">{item.name}</h3>
                        <h5 className="item__genre">{value}</h5>
                      </div>
                    </div>
                  </div>
                )}
              </>

              /*              <div className="flex flex-wrap w-auto" key={index}>
                <div className="w-full p-1 md:p-2">
                  <img
                    alt="gallery"
                    className={`block object-cover object-center w-56 h-52 rounded-lg hover:scale-110 transition duration-300 ease-in-out${
                      item.image === randomItems
                        ? "border-8 border-red-500 rounded-lg shadow-2xl"
                        : ""
                    }`}
                    src={item.image}
                  />
                  <div className="flex justify-center">
                    <p className="text-2xl font-semibold">{item.name}</p>
                  </div>
                </div>
              </div> */
            ))}
          </div>
          <div className="flex justify-center">
            {isShow ? (
              <button
                className="bg-blue-500 w-44 hover:bg-blue-700 text-white py-2  rounded-md px-4 mt-10 mb-10 text-2xl"
                onClick={randomized}
              >
                Randomize
              </button>
            ) : (
              <button
                disabled
                className="bg-green-500 w-44 text-center hover:bg-green-700 text-white py-2 rounded-md px-4 mt-10 text-2xl mb-10 animate-bounce cursor-not-allowed"
              >
                <LoopIcon className="animate-spin mr-2" />
                Choosing
              </button>
            )}
          </div>
          <hr />
        </div>
      </section>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-md">
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="flex justify-center"
            >
              <p className="text-2xl font-semibold"> Random Choose</p>
            </Typography>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="flex justify-center"
            >
              <p className="text-2xl font-semibold text-green-600">{value}</p>
            </Typography>
            <div className="flex justify-center m-auto pt-8 pb-2">
              <img
                src={randomItems}
                alt=""
                className="w-auto h-60 rounded-md"
              />
            </div>
            <div className="flex justify-center mb-1 mt-2">
              <p className="text-2xl font-bold text-blue-700">{inputValue}</p>
            </div>
            <div className="flex justify-center">
              <p className="text-sm font-medium text-gray-700">
                https://www.sliderrevolution.com/resources/css-animated-background
                28/10/2020 · CSS Multiple Background Image Parallax Animation.
                CSS animated background created by carpe numidium.
              </p>
            </div>
            <div className="flex justify-end mt-5">
              <button
                onClick={handleClose}
                type="button"
                class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Close
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default Dinner;
