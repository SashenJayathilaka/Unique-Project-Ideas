/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import toast, { Toaster } from "react-hot-toast";

// TODO:
// MARKUP
// box / container ✅
// input + button ✅
// list of items ✅
// button ✅

// FUNCTIONALITIES
// input -> save to state ✅
// button (top) -> add to list ✅
// button (bottom) -> trigger the randomizer ✅
// item doubleclick -> remove it ✅
// save to localStorage ✅

const defaultItems = JSON.parse(localStorage.getItem("items")) || [];

const storeToStorage = (items) => {
  localStorage.setItem("items", JSON.stringify(items));
};

function AddItems({ setNewItems }) {
  const [items, setItems] = useState(defaultItems);
  const [inputValue, setInputValue] = useState("");
  const [image, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [test, setTest] = useState("");

  const validator = () => {
    items.map((data) => {
      setTest(data);
    });
  };

  const updateItems = (newItems) => {
    // updated Items in LocalStorage
    storeToStorage(newItems);

    // update State
    setItems(newItems);
    setNewItems(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (test.image === image) {
      toast.error("you have already add this image try to different image", {
        duration: 8000,
        style: {
          background: "#fff",
          color: "#015871",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
          textAlign: "center",
        },
      });
    } else if (test.name === inputValue) {
      toast.error("you have already add this name try to different name", {
        duration: 8000,
        style: {
          background: "#fff",
          color: "#015871",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
          textAlign: "center",
        },
      });
    } else if (inputValue === "") {
      toast.error("item name is empty", {
        duration: 8000,
        style: {
          background: "#fff",
          color: "#015871",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
          textAlign: "center",
        },
      });
    } else if (image === "") {
      toast.error("item image is empty", {
        duration: 8000,
        style: {
          background: "#fff",
          color: "#015871",
          fontWeight: "bolder",
          fontSize: "17px",
          padding: "20px",
          textAlign: "center",
        },
      });
    } else {
      if (
        test.image !== image &&
        test.name !== inputValue &&
        inputValue !== ""
      ) {
        const newItem = {
          name: inputValue,
          selected: false,
          image: image,
          description: description,
        };

        const newItems = [...items, newItem];

        updateItems(newItems);
        setInputValue("");
        setImages("");
        setDescription("");
      } else {
        toast.error("error", {
          duration: 8000,
          style: {
            background: "#fff",
            textAlign: "center",
            color: "#015871",
            fontWeight: "bolder",
            fontSize: "17px",
            padding: "20px",
          },
        });
      }
    }

    /*     if (test.image !== image && test.name !== inputValue && inputValue !== "") {
      const newItem = {
        name: inputValue,
        selected: false,
        image: image,
        description: description,
      };

      const newItems = [...items, newItem];

      updateItems(newItems);
      setInputValue("");
      setImages("");
      setDescription("");
    } else {
    } */
  };

  const randomizer = () => {
    for (let i = 0; i < 20; i++) {
      setTimeout(pickRandomItem, 100 * i + 100);
    }
  };

  const pickRandomItem = () => {
    const randomItem = items[Math.floor(Math.random() * items.length)];

    const newItems = items.map((item) =>
      item === randomItem
        ? { ...item, selected: true }
        : { ...item, selected: false }
    );

    updateItems(newItems);
  };

  const removeItem = (i) => {
    const newItems = items.filter((_, idx) => idx !== i);

    updateItems(newItems);
  };

  useEffect(() => {
    validator();
  }, [image, inputValue]);

  return (
    <>
      <div className="container bg-white mx-auto shadow-lg w-full sm:w-2/4 h-auto p-6">
        <Toaster />
        <form onSubmit={handleSubmit} className="m-5">
          <div className="flex justify-center mb-5">
            <input
              className="py-2 px-4 border border-gray-500 flex-1 rounded-md"
              type="text"
              placeholder="Item Name"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center mb-5">
            <input
              className="py-2 px-4 border border-gray-500 flex-1 rounded-md"
              type="text"
              placeholder="Item Image URL"
              value={image}
              onChange={(e) => {
                setImages(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center mb-5">
            <input
              className="py-2 px-4 border border-gray-500 flex-1 rounded-md"
              type="text"
              placeholder="Item Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 border border-blue-500 hover:bg-blue-700 text-white py-2 px-4 w-24 text-semibold rounded-lg">
              Add
            </button>
          </div>
        </form>
      </div>
      <ul className="grid grid-cols-2 gap-2">
        {items.map((item, idx) => (
          <li
            className={`select-none cursor-pointer p-2   border border-gray-500 px-6 h-12 rounded-md${
              item.selected ? "bg-orange-500 text-white" : ""
            }`}
            key={idx}
          >
            <div className="flex justify-between">
              <p> {item.name}</p>
              <DeleteForeverIcon
                className="text-black hover:animate-pulse rounded-lg hover:text-red-600"
                onClick={() => removeItem(idx)}
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default AddItems;
