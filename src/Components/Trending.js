import React,{useContext,useEffect,useState} from 'react'
import { Context } from '../Context'
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom'

function Trending(){
    const {breakPoints} = useContext(Context)
    const [poster,setPoster] = useState([])

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=4fd39374b175ef0640037cc65b89f715')
        .then(response=>response.json())
        .then(data=>setPoster(data.results))
    },[])
    let trendingDisplay = poster.map(item=><Link to={`/movie/details/${item.id}`}><img key={item.id} alt={item.id||item.title} className='trendingImg' src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)
    
    return (
        <div className='trendingContainer'>
            <h2>Trending Movies</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
            {trendingDisplay}
            </Carousel>
        </div>
    )

}

export default Trending