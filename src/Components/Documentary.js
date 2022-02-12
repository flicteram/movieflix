import React, {useEffect,useState,useContext} from 'react'
import Carousel from 'react-elastic-carousel'
import { Context } from '../Context'
import {Link} from 'react-router-dom'

function Documentary(){
    const [documentary,setDocumentary] = useState([])
    const {breakPoints} = useContext(Context)
    
    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=4fd39374b175ef0640037cc65b89f715&with_genres=99&page=1')
        .then(response=>response.json())
        .then(data=>setDocumentary(data.results))
    },[])

    let documentaryDisplay = documentary.map(item=><Link key={item.id} to={`/movie/details/${item.id}`}><img alt={item.id} className='documentaryImg' src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`}/></Link>)
    
    return(
        <div className='documentaryContainer'>
            <h2>Documentaries</h2>
            <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
            {documentaryDisplay}
            </Carousel>
                
        </div>
    )
}

export default Documentary