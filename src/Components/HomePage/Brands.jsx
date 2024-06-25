import React from 'react'
import brandlogo from '../../Assets/logo.svg'
const Brands = () => {
  return (
    <div className='row'>
			<div className="col-lg-12">
				<div className="brand-main">
					<div className="brands-section">
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
						<img src={brandlogo} className='brand-logo' alt="" />
					</div>
					<div className="dropdown-button">
						<p className='mb-0 brand-dropdown-txt'>Brands that believe in us. Brands that have gone the extra mile with us. <button className='view-all btn'>View All</button></p>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Brands