
import React, { useEffect } from 'react'

export default function useDocument(title) {
 useEffect(()=>{
const originTilte = document.title;
return () => {
    document.title = originTilte
}
 },[])

 useEffect(()=>{
   document.title = title
 },[title]);
}
