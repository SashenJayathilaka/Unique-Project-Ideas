/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import LoopIcon from "@mui/icons-material/Loop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import images from "../data/breakfast";
import toast, { Toaster } from "react-hot-toast";
import Slider from "@mui/material/Slider";
import AddItems from "./AddItems";

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

function Breakfast({ value }) {
  const [inputValue, setInputValue] = useState("");
  const [randomItems, setRandomItems] = useState("");
  const [isShow, setIsShow] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [description, setDescription] = useState("");
  const [valueless, setValueless] = useState("");
  const [boxOpen, setBoxOpen] = useState(false);
  const [newItems, setNewItems] = useState([]);
  const [items, setItems] = useState([]);

  const randomized = () => {
    for (let i = 0; i < valueless; i++) {
      setTimeout(pickRandomItem, 100 * i + 100);
    }
    setTimeout(() => {
      setIsShow(true);
      toast.success("Choice Ready", {
        duration: 8000,
        position: "bottom-right",
        style: {
          background: "#fff",
          color: "#015871",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
        },
      });
      handleOpen();
    }, valueless * 100 + 200);

    toast.loading("Waiting...", {
      duration: valueless * 100 + 200,
      position: "bottom-right",
      style: {
        background: "#fff",
        color: "#015871",
        fontWeight: "bolder",
        fontSize: "17px",
        padding: "20px",
      },
    });
  };

  const pickRandomItem = () => {
    setIsShow(false);
    setBoxOpen(false);
    const randomItem = items[Math.floor(Math.random() * items.length)];

    if (items) {
      setRandomItems(randomItem.image);
      setInputValue(randomItem.name);
      setDescription(randomItem.description);
    }
  };

  useEffect(() => {
    if (newItems.length >= 2) {
      setItems(newItems);
    } else {
      setItems(images);
    }
  }, [newItems]);

  return (
    <>
      <section className="overflow-hidden text-gray-700">
        <Toaster />
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 shadow-2xl mb-8 mt-5">
          <div className="flex justify-center text-5xl font-bold mt-2 mb-5 ">
            <h1>{value}</h1>
          </div>
          <div className="grid grid-cols-5 gap-2 items-center">
            {items.map((item, index) => (
              <div key={item.id}>
                {item.image === randomItems ? (
                  <div className={`items ${isShow && `animate-bounce`}`}>
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
                  <div className="item">
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
              </div>
            ))}
          </div>
          {isShow && (
            <div className="absolute px-5 py-3 m-5">
              <p className="absolute text-gray-500 font-medium">
                Select your own Choosing Time
              </p>
              <Box sx={{ width: 300 }} className="mt-8">
                <Slider
                  aria-label="Temperature"
                  defaultValue={60}
                  getAriaValueText={setValueless}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={110}
                />
              </Box>
            </div>
          )}
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
          {isShow && (
            <div className="flex justify-end -mt-36">
              {boxOpen ? (
                <button
                  onClick={() => setBoxOpen(false)}
                  className="bg-green-500 w-44 text-center hover:bg-green-700 text-white py-2 rounded-md px-4 mt-10 text-xl mb-10 cursor-pointer"
                >
                  Add Your Own Items
                </button>
              ) : (
                <button
                  onClick={() => setBoxOpen(true)}
                  className="bg-green-500 w-44 text-center hover:bg-green-700 text-white py-2 rounded-md px-4 mt-10 text-xl mb-10 cursor-pointer"
                >
                  Add Your Own Items
                </button>
              )}
            </div>
          )}
          {boxOpen && (
            <div className="flex justify-center">
              <AddItems setNewItems={setNewItems} newItems={newItems} />
            </div>
          )}
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
            <div className="flex justify-center mb-1 mt-2 text-center">
              <p className="text-2xl font-bold text-blue-700">{inputValue}</p>
            </div>
            <div className="flex justify-center text-center">
              <p className="text-sm font-medium text-gray-700">{description}</p>
            </div>
            <div className="flex justify-end mt-5">
              <button
                onClick={handleClose}
                type="button"
                className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded-md hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
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

export default Breakfast;
