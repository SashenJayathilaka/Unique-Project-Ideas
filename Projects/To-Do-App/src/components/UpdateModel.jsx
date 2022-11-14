import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { doc, writeBatch } from "firebase/firestore";
import React, { useState } from "react";
import { firestore } from "../firebase/firebase";

const style = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function UpdateModel({ open, todo, id, handleClose }) {
  const [updateTodo, setUpdateTodo] = useState("");
  const [updateDate, setUpdateDate] = useState("");

  const onUpdateTodo = async (todo) => {
    try {
      const batch = writeBatch(firestore);
      const postDocRef = doc(firestore, "users", id, "todo", todo.id);
      batch.update(postDocRef, {
        todo: updateTodo,
        date: dayjs(updateDate).format("D MMMM YYYY"),
        time: dayjs(updateDate).format("HH:mm a"),
      });
      await batch.commit();
    } catch (error) {
      console.log(error);
    }
    setUpdateTodo("");
    setUpdateDate("");
    handleClose();
  };

  return (
    <Fade in={open}>
      <Box sx={style}>
        <Typography
          id="transition-modal-title"
          variant="h6"
          component="h2"
          style={{ marginBottom: "20px" }}
        >
          Update Your Todo
        </Typography>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            value={updateTodo}
            onChange={(e) => setUpdateTodo(e.target.value)}
            type="text"
            fullWidth
            label="Update Your Todo"
            id="fullWidth"
            style={{ marginBottom: "20px" }}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label="Update Date & Time"
                renderInput={(params) => <TextField {...params} />}
                value={updateDate}
                onChange={(newValue) => {
                  setUpdateDate(newValue);
                }}
                minDateTime={dayjs()}
              />
            </Stack>
          </LocalizationProvider>
        </Box>
        <Stack direction="row" spacing={5} style={{ marginTop: "10px" }}>
          <Button
            onClick={() => onUpdateTodo(todo)}
            style={{ background: "greenyellow", color: "#000", margin: "auto" }}
          >
            Update
          </Button>
        </Stack>
      </Box>
    </Fade>
  );
}

export default UpdateModel;
