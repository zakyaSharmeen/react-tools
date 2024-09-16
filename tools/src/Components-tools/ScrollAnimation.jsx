// https://github.com/michalsnik/aos

// install-npm install --save aos@next
// import AOS from 'aos';
// import 'aos/dist/aos.css'
//  useEffect(()=>{
//     AOS.init({duration: 2000});
// })
// add data-aos from library




import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScrollAnimation() {
    const divStyle = {
        backgroundColor: 'brown',
        width: '300px',
        height: '80px',
        margin: '10px auto',
      };

    useEffect(()=>{
        AOS.init({duration: 2000});
    })

  return (
    <>
    
    <div className="top" >
        <h1>SCROLL ANIMATION</h1> <br /><br />
        <h1>Fade</h1> <br /> <br /><br />
        <div style={divStyle} className="animation" data-aos="fade-up"></div> <br />
        <div style={divStyle} className="animation" data-aos="fade-down"></div> <br />
        <div style={divStyle} className="animation" data-aos="fade-right"></div> <br />
        <div style={divStyle} className="animation" data-aos="fade-left"></div> <br />
        <div style={divStyle} className="animation" data-aos="fade-up"></div> <br />
        <h1>Flip</h1>
        <div style={divStyle} className="animation" data-aos="flip-right"></div> <br />
        <div style={divStyle} className="animation" data-aos="flip-left"></div> <br />
        <h1>zoom</h1>
        <div style={divStyle} className="animation" data-aos="zoom-in"></div> <br />
        <div style={divStyle} className="animation" data-aos="zoom-out"></div> <br />


    </div>


    </>
  )
}

export default ScrollAnimation