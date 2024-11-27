// 1-creating the logic
// 2-in componnet givng the api using usefetch()

import React, { useEffect, useState } from 'react'

function UseFetch(url) {
    const [fetchedData, setFetchedData] = useState([])

 const fectchData = async () =>{
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    setFetchedData(data)
    
 }

 useEffect(() =>{
    fectchData()
 },[])

  

    
  return  fetchedData
  
}

export default UseFetch