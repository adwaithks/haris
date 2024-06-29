import React from 'react'
import footerlogo from '.././Assets/qwe 10 1.svg'
import  google from '.././Assets/image 2.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer-section black-bg'>
      <div className="container-main">
        <div className="row">
          <div className="col-lg-3">
            <div className="footer-box">
              <img src={footerlogo} className='footer-logo' alt="" />
              <img src={google} className='footer-partner' alt="" />
              <div className="footer-icons">
                <i class="ri-linkedin-box-fill"></i>
                <i class="ri-facebook-circle-fill"></i>
                <i class="ri-instagram-fill"></i>
                <i class="ri-twitter-x-fill"></i>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-box">
              <h4 className='mb-0 text-white footer-heading'>Menu</h4>
              <ul>
                <li><Link to='/' className='footer-item'>Home</Link></li>
                <li><Link to='/' className='footer-item'>Services</Link></li>
                <li><Link to='/' className='footer-item'>Works</Link></li>
                <li><Link to='/' className='footer-item'>Culture</Link></li>
                <li><Link to='/' className='footer-item'>Case Studies</Link></li>
                <li><Link to='/' className='footer-item'>Contacts</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-box">
              <h4 className='mb-0 text-white footer-heading'>Important Links</h4>
              <ul>
                <li><Link to='/' className='footer-item'>Case Studies</Link></li>
                <li><Link to='/' className='footer-item'>SEO</Link></li>
                <li><Link to='/' className='footer-item'>E-commerce Marketing</Link></li>
                <li><Link to='/' className='footer-item'>Lead Generation</Link></li>
                <li><Link to='/' className='footer-item'>Social Media Marketing</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="footer-box">
              <h4 className='mb-0 text-white footer-heading'>Get In Touch </h4>
              <ul>
                <li><Link to='/' className='footer-item'>+91 8075 040 330</Link></li>
                <li><Link to='/' className='footer-item'>bd@haris.co</Link></li>
                <li><Link to='/' className='footer-item'>2nd floor, 4 WING Avenue ,Panniyankara, 673003Kozhikode, Kerala</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="footer-copy">
              <p className='mb-0 copy-right-text light-greay-color text-center'>Copyrights © 2024 by Team Haris&Co.</p>
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Footer