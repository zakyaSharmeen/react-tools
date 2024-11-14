import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

function Useref() {
    const [name, setNmae] = useState("")
    const count =  useRef(0)
    useEffect(() =>{
        count.current = count.current +1
    })

  return (
    <div>
        <input type="text" onChange={(e) => setNmae(e.target.value)}/>
        <h2>Nme :{name}</h2>
        <h2>Renders:{count.current} </h2>
    </div>
  )
}

export default Useref