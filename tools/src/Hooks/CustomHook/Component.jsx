import React from 'react'
import UseFetch from './UseFetch'

function Component() {
    const api = UseFetch("https://jsonplaceholder.typicode.com/users")
  return (
    <div>
        {
            api.map((res) =>{
                return(
                    <h4 key={res.id}>{res.id} {res.name}</h4>
                )

            })
        }
    </div>
  )
}

export default Component