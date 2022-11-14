import { Avatar } from '@material-ui/core';
import React, { useState } from 'react'
import './ChatScreen.css'

const ChatScreen = () => {

    const [input, setInput] = useState('');

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
            message: 'Hey Guys!'
        },
        {
            name: 'Ellen',
            image: 'https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg',
            message: 'Chat guys😎'
        },
        {
            message: 'Hey bro This is Grate😍💛'
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You match with ellen on 10/08/2021</p>

            {messages.map(message => (
                message.name ? (
                    <div className='chatScreen__message'>
                        <Avatar
                            className='chat__screen'
                            alt={message.name}
                            src={message.image}
                        />
                        <p className='chatScreen__text'>{message.message}</p>
                    </div>
                ) : (
                    <div className='chatScreen__message'>
                        <p className='chatScreen__textUser'>{message.message}</p>
                    </div>
                )

            ))}
            <div>
                <form className='chatScreen__input'>
                    <input value={input} onChange={e => setInput(e.target.value)} className='chaScreen__inputFeal' placeholder='Type a message' type='text'/>
                    <button onClick={handleSend} type='submit' className='chatScreen__inputButton'>SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen