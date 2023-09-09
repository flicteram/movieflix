
import {useContext} from 'react'
import Carousel from 'react-elastic-carousel'
import { Context } from '../Context'
import {Link} from 'react-router-dom'
export default function DisplayMovies({moviesCategory, moviesData}){

  const {breakPoints} = useContext(Context)
  return(
    <div className='displayMoviesContainer'>
        <h2>{moviesCategory} Movies</h2>
        <Carousel breakPoints={breakPoints} showArrows={true} pagination={false}>
        {
          moviesData.results.map(movie=>(
            <Link key={movie.id} to={`/movie/details/${movie.id}`}>
              <img alt={movie.id} className='displayMoviesImg' src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
            </Link>
          ))
        }
        </Carousel>
    </div>
 )
}