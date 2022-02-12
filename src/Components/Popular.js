import React, {useEffect,useState,useContext} from 'react'
import Carousel from 'react-elastic-carousel'
import { Context } from '../Context'
import {Link} from 'react-router-dom'

function Popular(){
    const [popular,setPopular] = useState([])
    const {breakPoints} = useContext(Context)
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1')
        .then(response=>response.json())
        .then(data=>setPopular(data.results))
    },[])

    let popularDisplay = popular.map(item=><Link key={item.id} to={`/movie/details/${item.id}`}><img alt={item.id} className='popularImg' src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)
    
    return(
        <div className='popularContainer'>
            <h2>Popular Movies</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
            {popularDisplay}
            </Carousel>
                
        </div>
    )
}

export default Popular