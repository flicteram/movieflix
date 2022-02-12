import React, {useEffect,useState,useContext} from 'react'
import Carousel from 'react-elastic-carousel'
import { Context } from '../Context'
import {Link} from 'react-router-dom'

function Comedy(){
    const [comedy,setComedy] = useState([])
    const {breakPoints} = useContext(Context)
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=35&page=1')
        .then(response=>response.json())
        .then(data=>setComedy(data.results))
    },[])

    let comedyDisplay = comedy.map(item=><Link key={item.id} to={`/movie/details/${item.id}`}><img alt={item.id} className='comedyImg' src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)
    
    return(
        <div className='comedyContainer'>
            <h2>Comedy Movies</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
            {comedyDisplay}
            </Carousel>
                
        </div>
    )
}

export default Comedy