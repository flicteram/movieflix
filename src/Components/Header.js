import React,{useState,useEffect,useContext} from "react";
import { Context } from "../Context";
import {Link} from 'react-router-dom'
import glass from './Images/glass.png'


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
            <Link to='/'><p className='logo'>Movieflix</p></Link>
            <input onChange={handleChange} type='text' value={search} placeholder='search' autoFocus/>
            <img className='glass' alt='glass' src={glass}/>
        </header>
        
    )
}

export default Header
