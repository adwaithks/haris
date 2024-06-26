import React from 'react'
import Hero from '../Components/HomePage/Hero'
import Brands from '../Components/HomePage/Brands'
import About from '../Components/HomePage/About'
import Frame from '../Components/HomePage/Frame'
const Home = () => {
  return (
    <div className='home-page'>
      <div className="hero-home">
        <div className="container-main">
          <Hero/>
        </div>
      </div>
      <div className="container-main">
        <Brands/>
        <About/>
        <Frame/>
      </div>
    </div>
  )
}

export default Home