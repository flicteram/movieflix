import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function TrendingRandom(){
    const [poster,setPoster] = useState([])
    let displayPoster = ''

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4fd39374b175ef0640037cc65b89f715')
        .then(response=>response.json())
        .then(data=>setPoster(data.results))
    },[])

    
    if(poster.length>0){
       let randomPoster = Math.floor(Math.random()*poster.length)
        displayPoster = <div className='posterEl'>
                <img alt={poster[randomPoster].id} className='posterBig'src={`https://image.tmdb.org/t/p/original/${poster[randomPoster].backdrop_path}`}/>
                <div className='posterDetails'>
                <h1>{poster[randomPoster].title||poster[randomPoster].name}</h1>
                <Link to={`movieflix/movie/details/${poster[randomPoster].id}`}><button className='detailsButton'>Detalis</button></Link>
                <p>{poster[randomPoster].overview.length>200?poster[randomPoster].overview.split('').slice(0,200).join('')+'...':poster[randomPoster].overview}</p>
                </div>
            </div>
    }
    return (
        <div className="posterContainer">
            {displayPoster}
        </div>
    )
}

export default TrendingRandom