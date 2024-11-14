import React, { useContext } from 'react'
import { LoginContext } from './UserContextProvider'

function Child() {
    const login = useContext(LoginContext)
    console.log(login, "came from context api");
    
  return (
    <div>
        
    </div>
  )
}

export default Child