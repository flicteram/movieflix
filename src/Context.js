import React,{useState,createContext} from "react";
import { useHistory } from "react-router";
const Context = createContext()

function ContextProvider({children}){

    const [search,setSearch] = useState('')
    let history = useHistory()

    function handleChange(e){
        setSearch(e.target.value)
        if(search.trim().length-1>=1){
            history.push('movieflix/movie/search')
        }
        else{
            history.push('/movieflix')
        }
    }

    const breakPoints= [ 
        {width:300, itemsToShow:2, itemToScroll:2},
        {width:700, itemsToShow:3 ,itemToScroll:3},
        {width:900, itemsToShow:4, itemToScroll:4},
        {width:1300, itemsToShow:5, itemToScroll:5},
        {width:1700, itemsToShow:8, itemToScroll:4},
    ]

    return (
        <Context.Provider value={{breakPoints,search,handleChange}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}