import React from 'react'
import './Hero.css'
import logo from "../assets/30.png";


const Hero = () => {
  return (
    <main id='Home'>
      <div className='hero-main-div-1'>
        <div className='hero-div-1'>
          <h1 className='hero-h1'>FULL STACK DEVALOPER & A PERSON</h1>
        </div>
        <div className='hero-div-2'>
          <h2 className='hero-h2'>I am a designer, somewhat of a coder, and definitely a go-getter.</h2>
        </div>
        <div className='hero-div-3'>
          <h1 className='hero-h3'>MADE BY APPLESEEDS <br />
          <br />
          <span className='span-1'>My mission is to design and develop a website that you and your audience love.</span></h1>
        </div>
        <div className='hero-div-4'>
          <h2 className='hero-h4'> </h2>
        </div>
      </div>
      <div className='hero-main-div-2'>
        <div className='square pink'></div>
        <div className='square yellow'></div>
        <div className='hero-main-div-2-img'>
          <img src={logo} alt="sss" />
        </div>
        <div className='square blue'></div>
        <div className='square light-yellow'></div>
      </div>
    </main>
  )
}

export default Hero