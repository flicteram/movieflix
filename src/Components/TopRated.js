import React, {useContext,useEffect,useState} from 'react'
import { Context } from '../Context'
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom'

function TopRated(){
    const [topRated, setTopRated] = useState([])
    const {breakPoints} = useContext(Context)

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1')
        .then(response=>response.json())
        .then(data=>setTopRated(data.results))
    },[])

    let topRatedDisplay = topRated.map(item=><Link key={item.id} to={`/movie/details/${item.id}`}><img className='topRatedImg' alt={item.id} src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)
    return (
        <div className='topRated'>
            <h2>Top Rated</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
                {topRatedDisplay}
            </Carousel>
        </div>
        
    )
}

export default TopRated

