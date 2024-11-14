// usereducer create
// define initial state
// define reducer function
// define dispatch frunctoon


import React, { useReducer } from 'react'
// initial
const initialState = {
    count: 0
}
// reducer funct
const reducer = (state, action) => {
    switch(action.type) {
        case "increase" :{
            return {count: state.count +1}
        }
        case "decrease" :{
            return {count: state.count -1}
        }
        default:
            return state
    }
}

function UseReducer() {

    // usereducer
    const [state, dispatch] = useReducer(reducer, initialState)

    const increaseFunc = () =>{
        dispatch({type: "increase"})
    }

    const decreaseFunc = () =>{
        dispatch({type: "decrease"})
    }

  return (
    <div>
        <h2>Counter: {state.count}</h2>
        <button onClick={increaseFunc}>Increase</button>
        <button onClick={decreaseFunc}>Decrease</button>

    </div>
  )
}

export default UseReducer