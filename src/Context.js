import React,{useState,createContext,useEffect,useRef} from "react";
import { useHistory } from "react-router-dom";
const Context = createContext()

function ContextProvider({children}){
    const wasSearchUsed = useRef(false)
    const [search,setSearch] = useState('')
    const firstRender = useRef(true)
    const history = useHistory()
    function handleChange(e){
        e.preventDefault()
        setSearch(e.target.value)
        wasSearchUsed.current = true
    }
    useEffect(() => {
        if (search.trim()) {
          history.push('/search')
          firstRender.current = false
        } else if(!search.trim() && !firstRender.current){
          history.push('/');
        }
      }, [search,history]);
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