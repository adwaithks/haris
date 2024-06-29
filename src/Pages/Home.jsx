import React from 'react'
import Hero from '../Components/HomePage/Hero'
import Brands from '../Components/HomePage/Brands'
import About from '../Components/HomePage/About'
import Frame from '../Components/HomePage/Frame'
import Whatwe from '../Components/HomePage/Whatwe'
import Headlines from '../Components/HomePage/Headlines'
import Consult from '../Components/HomePage/Consult'
import Clients from '../Components/HomePage/Clients'
import Chat from '../Components/HomePage/Chat'
import Map from '../Components/HomePage/Map'
import Faq from '../Components/HomePage/Faq'
const Home = () => {
  return (
    <div className="main-wrapper">
    <div className='home-page black-bg'>
      <div className="height-home">
        <div className="hero-home"> 
          <div className="container-main">
            <Hero/>
          </div>
        </div>
      </div>
      <div className="container-main">
        <Brands/>
        <About/>
        <Frame/>
        <Whatwe/>
        <div className="black-bg divider-space"></div>
      </div>
    </div>
    <div className="white-bgs">
      <div className="container-main">
        <Headlines/>
        <Consult/>
      </div>
      <Clients/>        
      <Chat/>
        <Map/>
        <Faq/>
    </div>
  </div>
  )
}

export default Home