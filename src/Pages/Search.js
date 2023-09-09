import React,{useEffect,useContext,useState} from "react";
import Header from "../Components/Header";
import { Context } from "../Context";
import {Link} from 'react-router-dom'
import useDebounce from "../hooks/useDebounce";


function Search(){
    const [displaySearch,setDisplaySearch] = useState([])
    const {search} = useContext(Context)
    const debSearch = useDebounce(search)
    let display =''
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4fd39374b175ef0640037cc65b89f715&query=${debSearch}`)
        .then(response=>response.json())
        .then(data=>setDisplaySearch(data.results))
    },[debSearch])

    if(debSearch){
        display = displaySearch.filter(item=>item.poster_path!==null).map(item=>(
            <Link to={`/movie/details/${item.id}`} key={item.id}><img className='searchResult' alt={item.name||item.title} src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}/></Link>
        ))}

    return (
        <div className='searchContainer'>
            <Header/>
            <h1>Movie List</h1>
            <div className='search'>
                {display.length>0?
                display:
                <h2 className='noResults'>No results</h2>}
            </div>
        </div>

    )
}

export default Search