import {useEffect, useState} from 'react'
export default function useDebounce(value){
  const [debValue, setDebValue] = useState(value)
  useEffect(()=>{
    const timeout = setTimeout(()=>setDebValue(value),500)
    return ()=>clearTimeout(timeout)
  },[value])
  return debValue
}