// install from npm i typewriter-effect
// import Typewriter from 'typewriter-effect';
// then component



import React from 'react'
import Typewriter from 'typewriter-effect';


function TextAnimation() {
  return (
   <>
    <div className="container">
        <h1> hii i m
        <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    delay:50,
    loop: true,
  }}
/>
        </h1>
    </div>

   </>
   

  )
}

export default TextAnimation