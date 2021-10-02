import React, {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import Modal from 'react-modal';
import Cast from "../Components/Cast";
import Crew from "../Components/Crew";
import Similar from '../Components/Similar'
import Header from "../Components/Header";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root')

function Details(){
    const [movie, setMovie] = useState([]) 
    const [credit,setCredit] = useState([])
    const [trailer, setTrailer] = useState('')
    const [isOpen,setIsOpen] = useState(false)

    const {movieId} = useParams()

    let released = ''
    let genres = ''
    let director = ''
    let background = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`


    function openModal(){
        setIsOpen(true)
    }
    function closeModal(){
        setIsOpen(false)
    }
    function duration(num){
    let hours = Math.floor(num / 60);  
    let minutes = num % 60;
        return hours+'h'+' ' + minutes+'m';         
    }

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4fd39374b175ef0640037cc65b89f715`)
        .then(response=>response.json())
        .then(data=>setMovie(data))
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`)
        .then(response=>response.json())
        .then(data=>setCredit(data))
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`)
        .then(response=>response.json())
        .then(data=>setTrailer(data.results.filter(item=>item.type.toLowerCase()==='trailer').map(item=>item.key)[0]))
    },[movieId])


    
    
    if(Object.values(movie).length>0){
        released= movie.release_date.slice(0,4)
        genres=movie.genres.slice(0,3).map(item=>item.name).join(' | ')
    }
    if(Object.values(credit).length>0){
        director = credit.crew.filter(item=>item.job==='Director').map(item=>item.name)  
        
    }


    return (
        <div className='detailsContainer'>
             <Header/>
            <div className='detailsMovie'
             style={{
                 backgroundImage:`url('${background}')`,
                 backgroundSize:'cover',
                 backgroundPosition:'center',
                 boxShadow:'inset 0px -300px 500px 50px rgb(27, 26, 26)'
                 }}>
                    
                <img className='posterSmall' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <div className='detailsDetails'>
                    <h1 className='detailsTitle'>{movie.name||movie.title} {`(${released})`}</h1>
                    <p className='director'>Directed by <strong>{director}</strong></p>
                    <p className='duration'>{duration(movie.runtime)}</p>
                    <div className='genresContainer'>
                        <p>{genres}</p>
                
                    </div>
                    <button className='trailerButton' onClick={openModal}>Trailer</button>
                    <Modal className='modal'
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Trailer">
                            <iframe src={`https://www.youtube.com/embed/${trailer}`}/>
                    </Modal>
                    <p className='overview'>{movie.overview}</p>
                </div>
            </div>
                 <Cast/>
                 <Crew/>
                 <Similar/>
                
        </div>
    )
}

export default Details


