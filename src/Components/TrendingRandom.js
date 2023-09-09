import React from 'react'
import {Link} from 'react-router-dom'
export default function TrendingRandom({movieData}){
    const randomNumber = Math.floor(Math.random()*movieData.length)
    const randomMovie = movieData[randomNumber]
    return (
        <div className="posterContainer">
            <div className='posterEl'>
                <img alt={randomMovie.id} className='posterBig'src={`https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}`}/>
                <div className='posterDetails'>
                <h1>{randomMovie.title||randomMovie.name}</h1>
                <Link to={`/movie/details/${randomMovie.id}`}><button className='detailsButton'>Detalis</button></Link>
                <p>{randomMovie.overview.length>200?randomMovie.overview.split('').slice(0,200).join('')+'...':randomMovie.overview}</p>
                </div>
            </div>
        </div>
    )
}
