import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Pusher from "pusher";
import messageModel from "./messageModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1461532",
  key: "e9137e3fe473afa04deb",
  secret: "b6ce41b14472c389b1c8",
  cluster: "eu",
  useTLS: true,
});

app.use(express.json());
app.use(cors());

// db config
const monogoUrl =
  "mongodb+srv://admin:tMp2t3jTA2dMJjgC@cluster0.7wsmmzn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(monogoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Db CONNECTED");

  const changeStream = mongoose.connection.collection("messages").watch();
  changeStream.on("change", (change) => {
    pusher.trigger("messages", "newMessage", {
      change: change,
    });
  });
});

app.get("/", (req, res) => res.status(200).send("Messenger MERN Clone"));

app.post("/save/message", (req, res) => {
  const dbMessage = req.body;

  messageModel.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/retrieve/conversation", (req, res) => {
  messageModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`listen on localhost:${port}`));
