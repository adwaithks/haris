import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
	return (
		<div className="about-main-section">
			<div className='row'>
				<div className="col-lg-9">
					<div className="about-main">
						<h1 className='mb-0 about-main-heading abra-font'>Here to Help Brands Dream Big, <span className='abra-font block-text'>and Achieve Bigger.</span></h1>
						<p className='mb-0 sub-text-aboutus'>We've come a long way ever since we started our journey in 2020 as a digital marketing company with just 6 members and a handful of clients. Today, we're 100+ members strong, organised into 8 departments, with a huge (and satisfied) clientele. The work culture, results and innovation are at the core of who we are.</p>
						<Link className="btn learn-btn primary-bg abra-font" to="/about">Learn More About Us</Link>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="number-count">
						<div className="count-block">
							<h1 className='abra-font mb-0 count-text'>2020 <span className='block-text abra-font count-small'>Established Year</span></h1>
						</div>
						<div className="count-block">
							<h1 className='abra-font mb-0 count-text'>100+ <span className='block-text abra-font count-small'>Employees</span></h1>
						</div>
						<div className="count-block">
							<h1 className='abra-font mb-0 count-text'>08+ <span className='block-text abra-font count-small'>Departments</span></h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About