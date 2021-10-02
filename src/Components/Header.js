import React,{useState,useEffect,useContext} from "react";
import { Context } from "../Context";
import {Link} from 'react-router-dom'



function Header(){
    const [background,setBackground]=useState('inherit')
    const {search,handleChange} = useContext(Context)

    function listenScrollEvent(){
        if(window.scrollY>50){
            setBackground('black')
        }
        else{
            setBackground('inherit')
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', listenScrollEvent)
    },[])

    return (
        <header style={{backgroundColor:background}}>
            <Link to='/movieflix'><p className='logo'>Movieflix</p></Link>
            <input onChange={handleChange} type='text' value={search} placeholder='search movie' autoFocus/>
        </header>
        
    )
}

export default Header
