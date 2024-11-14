import React, { useState } from 'react'

function UseState() {
  const[counter, setCounter] = useState(0)
  const [change,setChange] = useState("")

  const handleIncrease = () =>{
    setCounter(counter +1)
  }
  return (
    <div>
      <input type="text" onChange={(e) => setChange(e.target.value)} />
      <h1>{change}Counter: {counter}</h1>
      <button onClick={handleIncrease}>INCREASE</button>
    </div>
  )
}

export default UseState