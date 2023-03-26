import '../styles/main.css'
import MovieList from '../components/MovieList'
import React from 'react'
import Search from '../components/Search'

export default function Home(){
    const movies = require('../movies/movies.json')
    const rmovie = movies[Math.floor(Math.random() * movies.length)]

    const [cmovie, setCmovie] = React.useState(rmovie)
    
    function toggle(movie){
        setCmovie(movie)
    }

    return(
        <div className='Home'>
            <div className='backdrop'>
                <div className='image-container'>
                    <img className='img1' src={cmovie.backdrops[[Math.floor(Math.random() * movies.length)]]}
                        width="100%" />
                    <div className='backdrop--text'>
                        <p>{cmovie.title}</p>
                        <button className='play--btn'> <img src="./images/play.png" height="10px" /> <span>Play</span></button>
                        <button style={{
                            backgroundColor: "#C5C5C5",
                            color: "white",
                        }}>More Info</button>
                    </div>
                </div>
            
                <div className='movies1'>
                    <p>Top Movies</p>
                    <MovieList 
                        movies = {movies}
                        toggle = {toggle}
                    />
                </div>
            </div>
        </div>
    )
}