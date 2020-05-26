import React, {useEffect,useState} from 'react';


export const useMatch = (query)=>{
    const [matches,setMatches] = useState(window.matchMedia(query).matches)
  
    useEffect(()=>{
      const media = window.matchMedia(query)
      if(media.matches !== matches){
        setMatches(media.matches)
      } 
      const listener = ()=> setMatches(media.matches)
      media.addListener(listener)
      return ()=> media.removeListener(listener)
    },[query])
    return matches
}