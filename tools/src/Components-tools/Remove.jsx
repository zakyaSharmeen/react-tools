import React, { useState } from 'react'

function Remove() {



    const [list, setList] = useState([
        { id: 1, name: "kiran"},
        { id: 2, name: "raju"},
        { id: 3, name: "kiran"},
        { id: 4, name: "raju"},
        { id: 5, name: "kiran"},
        { id: 6, name: "raju"}, { id: 8, name: "kiran"},
        { id: 7, name: "raju"},
 

     ])


     function handleDelete (id) {
        const newList = list.filter((i) => i.id !== id)
        setList(newList);

     }


    // const list = [
    //    { id: 1, name: "kiran"},
    //    { id: 2, name: "raju"},
    //    { id: 3, name: "kiran"},
    //    { id: 4, name: "raju"},
    //    { id: 5, name: "kiran"},
    //    { id: 6, name: "raju"}, { id: 8, name: "kiran"},
    //    { id: 7, name: "raju"},


    // ]
  return (
    <>

    <ul>
        {
            list.map((todo) => {
                return <li key={todo.id} style={{marginLeft: "20px", fontSize: "20px"}}>{todo.name}

                <button onClick={() => handleDelete(todo.id)} style={{marginLeft: "20px", fontSize: "20px"}}>DELETE</button>
                </li>
            })
        }
    </ul>

    </>
  )
}

export default Remove