import React from 'react'
import Header from '../components/Home/Header'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Features from '../components/Home/Features'
import Testimonial from '../components/Home/Testimonial'
import Cta from '../components/Home/Cta'
import Footer from '../components/Home/Footer' 

const Home = () => {
  return (
    <div> 
      <Header />
      <Hero />
      <div className="h-8"></div>
      <About />
      <div className="h-8"></div>
      <Features />
      <div className="h-8"></div>
      <Testimonial />
      <div className="h-8"></div>
      <Cta />
      <div className="h-8"></div>
      <Footer/>
    </div>
  )
}

export default Home