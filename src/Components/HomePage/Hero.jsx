import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
	return (
		<div className='award-winning'>
			<div className="award-content">
				<h1 className='mb-0 heading-text-hero'>An <span className='primary-color abra-font'>Award-winning</span>  Digital <span className='block-text abra-font'> Marketing Agency in Kerala </span></h1>
				<p className='mb-0 sub-text-hero'>A digital marketing company that’s on the course of powering up brands <span className='block-text'> with the power of marketing, design and tech. </span></p>
				<div className="button-dv">
					<Link className="btn proposal-btn primary-bg " to="/about">GET A PROPOSAL</Link>
					<Link className="btn proposal-btn" to="/about">CONSULT WITH US</Link>
				</div>
				<div className="count-dv">
					<div className="counts">
						<h4 className='mb-0 number-text abra-font'>600M+</h4>
						<p className='mb-0 number-text-sub abra-font'>Revenue <span className='block-text abra-font'>Generated</span> </p>
					</div>
					<div className="counts left-space">
						<h4 className='mb-0 number-text abra-font'>150+</h4>
						<p className='mb-0 number-text-sub abra-font'>Clients </p>
					</div>
					<div className="counts left-space">
						<h4 className='mb-0 number-text abra-font'>1000+</h4>
						<p className='mb-0 number-text-sub abra-font'>Projects</p>
					</div>
					<div className="counts left-space">
						<h4 className='mb-0 number-text abra-font'>05</h4>
						<p className='mb-0 number-text-sub abra-font'>National-level  <span className='block-text abra-font'>Awards</span> </p>
					</div>
				</div>
			</div>
			<div className="ceo-image">

			</div>
		</div>
	)
}

export default Hero