import React from 'react'
import './VideoSideBar.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
//import Ticker from 'react-ticker';

function VideoSideBar({channel, description, song}) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__icons' />
          <p>{song}</p>
        </div>
      </div>
      <img className='videoFooter__record' src='./pngwing.com (1).png' alt='' />
    </div>
  )
}

export default VideoSideBar