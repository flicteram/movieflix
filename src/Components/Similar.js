import React, {useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { Context } from '../Context'
import Carousel from 'react-elastic-carousel'
import {Link} from 'react-router-dom'


function Similar(){
    const [similar,setSimilar] = useState([])
    const {movieId} = useParams()
    const {breakPoints} = useContext(Context)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US&page=1`)
        .then(response=>response.json())
        .then(data=>setSimilar(data.results.slice(0,8).map(item=><Link to={`/movie/details/${item.id}`} key={item.id}><img alt={item.id} className='similarImg' src={`https://image.tmdb.org/t/p/w500//${item.poster_path}`}/></Link>)))
    },[movieId])

    return(
        <div className='similar'>
            <h2>More like this</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
                {similar}
            </Carousel>
        </div>
    )
}

export default Similar