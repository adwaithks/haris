import React from 'react'
import Navbar from '.././Outlets/Navbar'
import Footer from '.././Outlets/Footer'
import { Outlet } from 'react-router-dom';
const LayoutPage = () => {
  return (
    <div>
        <Navbar/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default LayoutPage