import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
	return (
		<div className='award-winning'>
			<div className="award-content">
				<h1 className='mb-0 heading-text-hero'>An <span className='primary-color'>Award-winning</span>  Digital <span className='block-text'> Marketing Agency in Kerala </span></h1>
				<p className='mb-0 sub-text-hero'>A digital marketing company that’s on the course of powering up brands <span className='block-text'> with the power of marketing, design and tech. </span></p>
				<div className="button-dv">
					<Link className="btn proposal-btn primary-bg" to="/about">GET A PROPOSAL</Link>
					<Link className="btn proposal-btn" to="/about">CONSULT WITH US</Link>
				</div>
			</div>
			<div className="ceo-image">

			</div>
		</div>
	)
}

export default Hero