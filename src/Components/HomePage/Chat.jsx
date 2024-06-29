import React from 'react'
import { Link } from 'react-router-dom'
import call from '../../Assets/Vector.svg'
import msg from '../../Assets/Vector (1).svg'
import loc from '../../Assets/Vector (2).svg'
import Form from 'react-bootstrap/Form';
const Chat = () => {
	return (
		<div className='live-chat black-bg'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-6">
						<div className="chat-dv">
							<h1 className='text-white abra-font chat-heading'>Let's Have a Chat</h1>
							<p className='light-greay-color chat-sub '>Give us a call or email us to learn more about our services. Need a face-to-face discussion? Feel free to visit us. </p>
							<div className="location-div">
								<div className="location-main">
									<div className="location-half">
										<img src={call} className='loc-icon' alt="" />
										<div className="location-text">
											<p className='mb-0 enq-text text-white'>For More Enquires</p>
											<Link className='location-link text-white' to="/">+91 8075 040 330</Link>
										</div>
									</div>
									<div className="location-half">
										<img src={msg} className='loc-icon' alt="" />
										<div className="location-text">
											<p className='mb-0 enq-text text-white'>Email Us At</p>
											<Link className='location-link text-white' to="/">bd@haris.co</Link>
										</div>
									</div>
									<div className="location-full">
										<img src={loc} className='loc-icon' alt="" />
										<div className="location-text">
											<p className='mb-0 enq-text text-white'>2nd floor, 4 WING Avenue ,Panniyankara, 673003Kozhikode, Kerala		</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="form-dv">
							<h2 className='mb-0 abra-font call-back-text'>Get a Callback</h2>
							<div className="form-call-back">
								<Form>
									<Form.Group className="mb-3 form-half" controlId="formBasicEmail">
										<Form.Label>Full Name</Form.Label>
										<Form.Control type="email" placeholder="" />
									</Form.Group>
									<Form.Group className="mb-3 form-half" controlId="formBasicEmail">
										<Form.Label>Company/Organization*</Form.Label>
										<Form.Control type="email" placeholder="" />
									</Form.Group>
									<Form.Group className="mb-3 form-half" controlId="formBasicEmail">
										<Form.Label>Phone*</Form.Label>
										<Form.Control type="email" placeholder="" />
									</Form.Group>
									<Form.Group className="mb-3 form-half" controlId="formBasicEmail">
										<Form.Label>Company email*</Form.Label>
										<Form.Control type="email" placeholder="" />
									</Form.Group>
									<Form.Group className="mb-3 form-full" controlId="exampleForm.ControlTextarea1">
										<Form.Label>Example textarea</Form.Label>
										<Form.Control as="textarea" rows={5} />
									</Form.Group>
								</Form>
								<div className="submit-from">
									<button className='btn submit-btn abra-font' type='submit'>Submit Now <i class="ri-arrow-right-up-line"></i></button>
										<div className="icons-button">
											<i class="ri-linkedin-box-fill"></i>
											<i class="ri-facebook-circle-fill"></i>
											<i class="ri-instagram-fill"></i>
											<i class="ri-twitter-x-fill"></i>
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

export default Chat