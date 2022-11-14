import React from 'react'
import Chat from './Chat'

function Chats() {
    return (
        <div className='chats'>
            <Chat
                name="Taylor"
                message="Hey Whats up!"
                timestamp="40 second ago"
                profilePic="https://drive.google.com/uc?export=download&id=1f_hjy1EEKOCADR1ejmhUxU-SbBJYf7bU"
            />
            <Chat
                name="Mark"
                message="yooo 🤩"
                timestamp="30 minutes ago"
                profilePic="https://drive.google.com/uc?export=download&id=1eoyF6XfWFjPuNHb-pR13bDBlC-aOzwsZ" />
            <Chat
                name="Ellen"
                message="Hi 🔥"
                timestamp="2 hour ago"
                profilePic="https://drive.google.com/uc?export=download&id=1B4llVA2gkx-BMLkv8i9NHVHPtRGKPEZC" />
            <Chat
                name="Tom"
                message="Chat us! 😎"
                timestamp="40 second ago"
                profilePic="https://drive.google.com/uc?export=download&id=1PNru-ygHnNMwlyUSI7tuJH-af1BnH5bj" />
            <Chat
                name="Joan"
                message="Work 😴"
                timestamp="18 hour ago"
                profilePic="https://drive.google.com/uc?export=download&id=1bKMa5o5gos9Tq0XxeyFyqNIWoqoYavqw" />
        </div>
    )
}

export default Chats