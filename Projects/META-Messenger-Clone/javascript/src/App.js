import { IconButton, Input, InputLabel } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // useState = variable in REACT
  // useEffect = run code on a condition in REACT

  useEffect(() => {
    // run once when the app component loads
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapShot => {
        setMessages(snapShot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])

  useEffect(() => {
    // run code here
    // if its blank inside [], this code runs ONCE when the app components lodes
    // if we have a variable like input,  it's input
    setUsername(prompt('Please Enter Your Name'))
  }, []) // condition

  const sendMessage = (event) => {

    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // all the logic send the message
    // setMessages([...messages, { username: username, text: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <img className='messenger__image' src='https://i.postimg.cc/mDJRbz2D/Facebook-Messenger-logo-2020.webp' alt='' />
      <h1>Messenger</h1>
      <h2>Welcome {username}</h2>

      <form className='app_form'>
        <FormControl className='app__formControl'>
          <Input className='app__input' placeholder='Enter a Message...' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app_iconsButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Message key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
  
}

export default App;
