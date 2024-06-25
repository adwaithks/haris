import React from 'react'
import Hero from '../Components/HomePage/Hero'
import Brands from '../Components/HomePage/Brands'
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
      </div>
    </div>
  )
}

export default Home