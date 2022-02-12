import React, {useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { Context } from '../Context'
import Carousel from 'react-elastic-carousel'
import user from './Images/profile.png'

function Crew(){
    const [crew,setCrew] = useState([])
    const {movieId} = useParams()
    const {breakPoints} = useContext(Context)

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`)
        .then(response=>response.json())
        .then(data=>setCrew(data.crew.slice(0,10).map((item,index)=>(
            <div className='crew' key={index}>
                {item.profile_path===null?<img className='user' alt='user' src={user}/>:<img className='crewImg' alt='crew' src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}/>}
                <p className='crewName'>{item.name}</p>
                <p className='crewJob'>{item.job}</p>
            </div>
            
        ))))
    },[movieId])

    

    return(
        <div className='crewContainer'>
            <h2>Crew</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false} showEmptySlots={true}>
            {crew}
            </Carousel>
        </div>
    )
}

export default Crew