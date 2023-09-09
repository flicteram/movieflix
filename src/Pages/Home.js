import {useEffect, useState} from 'react'
import TrendingRandom from '../Components/TrendingRandom'
import Header from '../Components/Header'
import DisplayMovies from '../Components/DisplayMovies'

export default function Home(){
    const [moviesFetched, setMoviesFetched] = useState([])
    const [loading,setLoading] = useState(true)
    
    useEffect(()=>{
        (async()=>{
            const moviesPromises = moviesData.map(movie=>fetch(movie.fetchURL).then(r=>r.json()))
            const data = await Promise.all(moviesPromises)
            setMoviesFetched(data)
            setLoading(false)
        })()
    },[])

    if(loading) return (
        <div className='loadingDetailsPage'>
            <h2 className='loadingDetailsPageText'>Loading...</h2>
        </div>
    )

    const [trending] = moviesFetched

    return (
        <div className='home'>
            <Header/>
            <TrendingRandom movieData={trending.results}/>
            {moviesData.map((movie,index)=>(
                <DisplayMovies key={movie.title} moviesData={moviesFetched[index]} moviesCategory={movie.title}/>
            ))}
        </div>
    )
}

const moviesData = [
    {
        fetchURL:"https://api.themoviedb.org/3/trending/movie/day?api_key=4fd39374b175ef0640037cc65b89f715",
        title:"Trending"
    },
    {
        fetchURL:"https://api.themoviedb.org/3/movie/popular?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1",
        title:"Popular"
    },
    {
        fetchURL:'https://api.themoviedb.org/3/movie/top_rated?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1',
        title:"Top Rated"
    },
    {
        fetchURL:'https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=35&page=1',
        title:"Comedy"
    },
    {
        fetchURL:"https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=28&page=1",
        title:"Action"
    },
    {
        fetchURL:"https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=10749&page=1",
        title:"Romantic"
    },
    {
        fetchURL:"https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=18&page=1",
        title:"Drama"
    },
    {
        fetchURL:"https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=27&page=1",
        title:"Horror"
    },
    {
        fetchURL:"https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=99&page=1",
        title:"Documentary"
    }
]