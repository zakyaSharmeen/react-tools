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
// import Users from './rtk/faeture/Users'
import Pokemon from "./fetch/Pokemon.jsx"
import UseState from './Hooks/UseState.jsx'
import UserContextProvider from './Hooks/ContextApi/UserContextProvider.jsx'
import User from './Hooks/ContextApi/User.jsx'
import Useref from './Hooks/Useref.jsx'
import Counterincrease from './Components-tools/Counterincrease.jsx'
import UseReducer from './Hooks/UseReducer.jsx'
import Component from './Hooks/CustomHook/Component.jsx'

function App() {
  return (
    <div className="App">
      {/* <Users/> */}
      {/* <Pokemon/>
      <UseState/> */}
      {/* <UserContextProvider>
        <User/>


      </UserContextProvider> */}

      {/* <Useref/> */}
      {/* <Counterincrease/> */}
      {/* <UseReducer/> */}
      <Component/>
    </div>
  )
}

export default App