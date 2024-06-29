import React from 'react'
import google from '../../Assets/Frame 14.svg'
import user from '../../Assets/Ellipse 7.svg'
const Clients = () => {
	return (
		<div className="clients-reviews">
			<div className="container-main">
				<div className='row'>
					<div className="col-lg-6">
						<div className="review-main">
							<h1 className='clients-heading mb-0 abra-font'>Client Reviews</h1>
							<p className='mb-0 clents-sub'>Here is what our clients have to say about our service</p>
							<img src={google} className='clients-logo' alt="" />
						</div>
					</div>
					<div className="col-lg-6">
						<div className="revew-main">
							<div className="review-box">
								<h4 className='reviewr-name mb-0'>Lorem Ipsum</h4>
								<p className='review-text mb-0'>“Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore “Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore””</p>
								<div className="rev-profile">
										<img src={user} className='user-img' alt="" />
										<div className="user-name-dv">
											<h5 className='mb-0 user-name'>Lorem</h5>
											<p className='mb-0 user-des'>lorem ipsum</p>
										</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Clients