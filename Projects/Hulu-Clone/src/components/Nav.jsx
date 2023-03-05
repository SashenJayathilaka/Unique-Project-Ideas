import React from 'react'
import requests from '../requests'
import "./Nav.css"

const Nav = ({ setSelectedOption }) => {
    return (
        <div className='nav'>
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMOvies)}>Action</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchSciFiMovies)}>Sci-fi</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchWesternMovies)}>Western</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchAnimationMovies)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTv)}>Tv Movie</h2>
        </div>
    )
}

export default Nav