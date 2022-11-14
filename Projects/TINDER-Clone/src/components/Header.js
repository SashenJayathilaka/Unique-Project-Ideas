import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './Header.css'
import { Link, useHistory } from 'react-router-dom';

function Header({ backButton }) {

    const history = useHistory();

    return (
        <div className='header'>
            {backButton ? (
                <IconButton onClick={() => history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize='large' className='headerIcons' />
                </IconButton>

            ) : (
                <IconButton>
                    <PersonIcon className='headerIcons' fontSize='large' />
                </IconButton>
            )}
            <Link to='/'>
                <img className='header__image' src='https://drive.google.com/uc?export=download&id=16irET-NWvD4aI255f7qO_1adcHFgzrFc' alt='tinder/logo' />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className='headerIcons' fontSize='large' />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header