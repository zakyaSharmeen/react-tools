// import './App.css';
// import Bootstrap5 from './Components-tools/Bootstrap5';
// import DatePickerCompo from './Components-tools/DatePicker';
// import DatePicker from './Components-tools/DatePicker';
// import Navbar0fcanvas from './Components-tools/Navbar0fcanvas';
// import PriceCard from './Components-tools/PriceCard';
// import Remove from './Components-tools/Remove';
// import ScrollAnimation from './Components-tools/ScrollAnimation';
// import TextAnimation from './Components-tools/TextAnimation';

// function App() {
//   return (
//    <>
//    {/* <Bootstrap5/> */}
//    {/* <Navbar0fcanvas/> */}
//    {/* <ScrollAnimation/> */}
   
//    {/* <TextAnimation/> */}
//    {/* <DatePickerCompo/> */}
//    {/* <PriceCard/> */}
//    <Remove/>
//    </>
//   );
// }

// export default App;


import React from 'react'
import  {getAllData}  from './rtk/faeture/gitUserSlice'
import {useDispatch, useSelector} from "react-redux"

function App() {

  // to trigger the action
  const dispatch = useDispatch()
   
  // to display 
  const data = useSelector((state) =>{

    // her the app is the key which we made in store
    console.log("data-came", state.app); 
    return state.app;
    

  })

  if(data.loading){
    return (<h2>Loading..............</h2>)
  }
  if(data.error !== null){
    return (<h3>{data.error}</h3>)
  }




  return (
   
    <div>
      <h1>DATA FROM API RTK</h1>
      <button onClick={() => dispatch(getAllData())}>Github Users</button>

    {
      data.users.map((elem) =>(
        <div>
          <li key={elem.id}><h2>{elem.name}</h2>
          <h3>{elem.username}</h3>
          <p>{elem.email}</p>
          <bold>{elem.phone}</bold>
          <p>{elem.company.name}</p>
          </li>
        </div>
      ))
    }

    
    </div>
   
  )
}

export default App