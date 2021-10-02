import React, {useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { Context } from '../Context'
import Carousel from 'react-elastic-carousel'
import user from './Images/profile.png'

function Cast(){
    const [cast,setCast] = useState([])
    const {movieId} = useParams()
    const {breakPoints}=useContext(Context)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`)
        .then(response=>response.json())
        .then(data=>setCast(data.cast.slice(0,10).map(item=>(
            <div className='cast'>
            {item.profile_path===null?<img className='user' src={user}/>:<img className='castImg' src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}/>}
                <p className='castName'>{item.name}</p>
                <p className='castChar'>{item.character}</p>
            </div>))))
    },[movieId])

    return (
        <div className='castContainer'>
            <h2>Cast</h2>
        <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
            {cast}
        </Carousel>
        </div>
    )
}

export default Cast
