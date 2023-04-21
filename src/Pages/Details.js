import React, {useState,useEffect} from "react"
import {useParams} from 'react-router-dom'
import Modal from 'react-modal';
import Cast from "../Components/Cast";
import Crew from "../Components/Crew";
import Similar from '../Components/Similar'
import Header from "../Components/Header";
import user from '../Components/Images/profile.png'


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
    const [movie, setMovie] = useState({}) 
    const [director, setDirector] = useState("")
    const [loading, setLoading] = useState(true)

    const [cast,setCast] = useState([])
    const [crew,setCrew] = useState([])
    const [trailer, setTrailer] = useState('')
    const [isOpen,setIsOpen] = useState(false)

    const {movieId} = useParams()

    function openModal(){
        setIsOpen(true)
    }
    function closeModal(){
        setIsOpen(false)
    }
    function duration(num){
        let hours = Math.floor(num / 60);  
        let minutes = num % 60;
        return `${hours}h ${minutes}m`;         
    }

    useEffect(()=>{
        const handleFetch = async () =>{
            setLoading(true)
            const [movieData, creditsData, trailerData] = await Promise.all([
                fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4fd39374b175ef0640037cc65b89f715`)
                .then(response=>response.json()),
                fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`)
                .then(response=>response.json()),
                fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=4fd39374b175ef0640037cc65b89f715&language=en-US`)
                .then(response=>response.json())
            ])
            setMovie(movieData)
            setDirector(creditsData.crew.find(person=>person.job==='Director').name)
            setCast(creditsData.cast.slice(0,10).map((cast,index)=>(
                <div className='cast' key={index}>
                {cast.profile_path===null?
                <img className='user' alt={'No name'} src={user}/>
                :
                <img className='castImg' alt={cast.name} src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}/>
                }
                    <p className='castName'>{cast.name}</p>
                    <p className='castChar'>{cast.character}</p>
                </div>)))
            setCrew(creditsData.crew.slice(0,10).map((item,index)=>(
                <div className='crew' key={index}>
                    {item.profile_path===null
                    ?
                    <img className='user' alt='user' src={user}/>
                    :
                    <img className='crewImg' alt='crew' src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}/>
                    }
                    <p className='crewName'>{item.name}</p>
                    <p className='crewJob'>{item.job}</p>
                </div>
            )))
            setTrailer(trailerData.results.find(item=>item.type.toLowerCase()==='trailer').key)
            setLoading(false)
        }
        handleFetch()
    },[movieId])


    if(loading){
        return <div className='loadingDetailsPage'>
            <h1 className='loadingDetailsPageText'>Loading...</h1>
        </div>
    }

    const released= movie.release_date.slice(0,4)
    const genres= movie.genres.slice(0,3).map(item=>item.name).join(' | ')

    const background = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`


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
                    
                <img className='posterSmall' alt={movie.name||movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
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
                            <iframe title={movie.name||movie.title} src={`https://www.youtube.com/embed/${trailer}`}/>
                    </Modal>
                    <p className='overview'>{movie.overview}</p>
                </div>
            </div>
                <Cast cast={cast}/>
                <Crew crew={crew}/>
                <Similar/>
        </div>
    )
}

export default Details


