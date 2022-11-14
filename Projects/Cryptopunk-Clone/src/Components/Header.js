import React from 'react'
import './Header.css'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

function Header() {
    return (
        <div className='header'>
            <div className='logoContainer'>
                <img className='punkLogo' src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/xgj55lzpq58oxbpvrq3b' alt='' />
            </div>
            <div className='searchBar'>
                <div className='searchIcon'>
                    <img className='searchIconContainer' src={searchIcon} alt='' />
                </div>
                <input className='searchInput' placeholder='Collection, item or user ....' />
            </div>
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='headerAction'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt='' />
                </div>
            </div>
        <div className='loginButton'>GET IN</div>
        </div>
    )
}

export default Header