import React, {useEffect,useState,useContext} from 'react'
import Carousel from 'react-elastic-carousel'
import { Context } from '../Context'
import {Link} from 'react-router-dom'

function Drama(){
    const [drama,setDrama] = useState([])
    const {breakPoints} = useContext(Context)
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=18&page=1')
        .then(response=>response.json())
        .then(data=>setDrama(data.results))
    },[])

    let dramaDisplay = drama.map(item=><Link to={`/movie/details/${item.id}`}><img key={item.id} alt={item.id} className='dramaImg' src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)
    
    return(
        <div className='dramaContainer'>
            <h2>Drama Movies</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
            {dramaDisplay}
            </Carousel>
                
        </div>
    )
}

export default Drama