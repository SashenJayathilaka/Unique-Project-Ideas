import { IconButton, Input, InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";
import Message from "./Message";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import Pusher from "pusher-js";

const pusher = new Pusher("e9137e3fe473afa04deb", {
  cluster: "eu",
});

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT

  const sync = async () => {
    await axios.get("/retrieve/conversation").then((res) => {
      setMessages(res.data);
    });
  };

  useEffect(() => {
    sync();
  }, []);

  useEffect(() => {
    const channel = pusher.subscribe("messages");
    channel.bind("newMessage", function (data) {
      sync();
    });
  }, [username]);

  useEffect(() => {
    // run code here
    // if its blank inside [], this code runs ONCE when the app components lodes
    // if we have a variable like input,  it's input
    setUsername(prompt("Please Enter Your Name"));
  }, []); // condition

  const sendMessage = (event) => {
    event.preventDefault();

    axios.post("/save/message", {
      username: username,
      message: input,
      timestamp: Date.now(),
    });

    setInput("");
  };

  return (
    <div className="App">
      <img
        className="messenger__image"
        src="https://i.postimg.cc/mDJRbz2D/Facebook-Messenger-logo-2020.webp"
        alt=""
      />
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className="app_form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a Message..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className="app_iconsButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>

      <FlipMove>
        {messages.map((message) => (
          <Message key={message._id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
