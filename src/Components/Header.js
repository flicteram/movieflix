import React,{useState,useEffect,useContext} from "react";
import { Context } from "../Context";
import {Link} from 'react-router-dom'
import glass from './Images/glass.png'


export default function Header(){
    const [background,setBackground]=useState('inherit')
    const {search,handleChange} = useContext(Context)
    const searchInputClass = search.length ? "searchInputActive" : "searchInput"
    useEffect(()=>{
        function listenScrollEvent(){
            if(window.scrollY>50){
                setBackground('black')
            }
            else{
                setBackground('inherit')
            }
        }
        window.addEventListener('scroll', listenScrollEvent)
        const ev = window.addEventListener('scroll', listenScrollEvent)
        return ()=>{
            window.removeEventListener('scroll', ev)
        }
    },[])

    return (
        <header style={{backgroundColor:background}}>
            <Link to='/'><p className='logo'>Movieflix</p></Link>
            <input 
            className={searchInputClass} 
            onChange={handleChange} 
            type='text' 
            value={search} 
            placeholder='search' 
            autoFocus={search.length>0}/>
            <img className='glass' alt='glass' src={glass}/>
        </header>
        
    )
}