import React from 'react'
import HeroBG from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <div className='h-[70vh]' style={{backgroundImage: `url(${HeroBG})`, backgroundPosition: 'center', }}>
        <div className="h-full w-full bg-[#0000005e] flex flex-col items-left justify-center gap-4" id='overlay'>
          <h2 className='w-4/5 md:w-3/5 text-white'>Welcome to Chatter: A Haven for Text-Based Content</h2>
          <p className='text-white'>Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
          <button className='btn-pry'>Get started</button>
        </div>
    </div>
  )
}

export default Hero