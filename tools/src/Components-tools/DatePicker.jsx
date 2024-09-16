// npm install react-datepicker
// npm install react-datepicker/dist/react-datepicker.css
// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// use compnent


import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';



function DatePickerCompo() {
    const [selectedDate, setSelectedDate] = useState(null);

  return (

    <div className='container'>
    <DatePicker 
      selected={selectedDate} 
      onChange={(date) => setSelectedDate(date)} 
      dateFormat="dd/MM/yyyy"
      placeholderText="Select a date"
    />
  </div>
  )
}

export default DatePickerCompo