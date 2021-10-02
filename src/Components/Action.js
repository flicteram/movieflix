import React, {useEffect,useState,useContext} from 'react'
import Carousel from 'react-elastic-carousel'
import { Context } from '../Context'
import {Link} from 'react-router-dom'

function Action(){
    const [action,setAction] = useState([])
    const {breakPoints} = useContext(Context)
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=28&page=1')
        .then(response=>response.json())
        .then(data=>setAction(data.results))
    },[])

    let actionDisplay = action.map(item=><Link to={`movieflix/movie/details/${item.id}`}><img key={item.id} alt={item.id} className='actionImg' src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)
    
    return(
        <div className='actionContainer'>
            <h2>Action Movies</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
            {actionDisplay}
            </Carousel>
                
        </div>
    )
}

export default Action