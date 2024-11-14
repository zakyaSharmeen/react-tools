import React, { useState } from 'react'

function Counterincrease() {
    const [count, setCount] = useState(0)

    const increaseFunc = () =>{
        setCount((prev) => prev+1)
    }

    const decreaseFunc = () =>{
        setCount((prev) => prev-1)
    }


  return (
    <div>
        <h2>Counter: {count}</h2>
        <button onClick={increaseFunc}>Increase</button>
        <button onClick={decreaseFunc}>Decrease</button>

    </div>
  )
}

export default Counterincrease