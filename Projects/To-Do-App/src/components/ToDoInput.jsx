import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/firebase";
import dayjs from "dayjs";

function ToDoInput({ id }) {
  const [dateTime, setDateTime] = React.useState("");
  const [todo, setTodo] = useState("");
  const [user] = useAuthState(auth);

  /* console.log(dayjs(dateTime).format("D MMMM YYYY"));
  console.log(dayjs(dateTime).format("HH:mm a")); */

  const sendTodo = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(firestore, "users", id, "todo"), {
        todo: todo,
        date: dayjs(dateTime).format("D MMMM YYYY"),
        time: dayjs(dateTime).format("HH:mm a"),
        username: user?.displayName,
        userImage: user?.photoURL,
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }

    setTodo("");
    setDateTime("");
  };
  return (
    <div className="flex justify-center mb-5">
      <div className="mb-3 xl:w-full">
        <label
          htmlFor="exampleFormControlInput5"
          className="flex justify-center font-extrabold text-3xl mb-5 text-gray-100 animate-bounce"
        >
          Add your ToDo
        </label>
        <div className="flex gap-6 w-fu">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              className="w-max px-3 py-1.5 font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              label="ToDo"
              variant="outlined"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <MobileDateTimePicker
                className="w-max px-3 py-1.5 font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                label="Choose Date & Time"
                value={dateTime}
                onChange={(newValue) => {
                  setDateTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                minDateTime={dayjs()}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <div className="flex space-x-2 justify-center mt-5">
          <button
            type="button"
            onClick={sendTodo}
            disabled={!todo}
            className="w-60 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-2xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoInput;
