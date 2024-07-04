import React from "react";
import { Link } from "react-router-dom";
import call from "../../Assets/Vector.svg";
import msg from "../../Assets/Vector (1).svg";
import loc from "../../Assets/Vector (2).svg";
import Form from "react-bootstrap/Form";
const Chat = () => {
	return (
		<div className="live-chat black-bg">
			<div className="container-main">
				<div className="row">
					<div className="col-lg-6">
						<div className="chat-dv">
							<h1 className="text-white abra-font chat-heading">
								Let's Have a Chat
							</h1>
							<p className="light-greay-color chat-sub ">
								Give us a call or email us to learn more about
								our services. Need a face-to-face discussion?
								Feel free to visit us. 
							</p>
							<div className="location-div">
								<div className="flex flex-col h-[100%]">
									<div className="flex-col md:flex md:flex-row md:items-center">
										<div className="w-[100%] h-[100%] md:w-[50%] flex">
											<img
												src={call}
												height={40}
												width={40}
												className="loc-icon"
												alt=""
											/>
											<div className="w-[100%] h-[100%]  md:w-[50%] location-text flex flex-col justify-center">
												<p className="mb-0  text-white">
													For More Enquires
												</p>
												<Link
													className="location-link w-[100%] text-white"
													to="/"
												>
													+91 8075 040 330
												</Link>
											</div>
										</div>
										<div className="w-[100%] h-[100%] md:w-[50%] flex mt-4">
											<img
												src={msg}
												height={40}
												width={40}
												className="loc-icon"
												alt=""
											/>
											<div className="location-text flex flex-col justify-center">
												<p className="mb-0 enq-text text-white">
													Email Us At
												</p>
												<Link
													className="location-link text-white"
													to="/"
												>
													bd@haris.co
												</Link>
											</div>
										</div>
									</div>
									<div className="w-[100%] h-16 md:w-[50%] flex mt-4">
										<img
											src={loc}
											height={40}
											width={40}
											className="loc-icon"
											alt=""
										/>
										<div className="location-text flex items-center">
											<p className="mb-0 enq-text text-white">
												2nd floor, 4 WING Avenue
												,Panniyankara, 673003Kozhikode,
												Kerala{" "}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<div class="w-[100%] lg:w-1/2 mt-12 lg:mt-0 bg-[#7744d5] p-8 pt-6 pb-14 rounded-lg text-white lg:absolute lg:right-0 lg:-top-40">
							<h2 className="mb-0 abra-font call-back-text">
								Get a Callback
							</h2>
							<div className="form-call-back">
								<Form>
									<Form.Group
										className="mb-3 form-half"
										controlId="formBasicEmail"
									>
										<Form.Label>Full Name</Form.Label>
										<Form.Control
											type="email"
											placeholder=""
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 form-half"
										controlId="formBasicEmail"
									>
										<Form.Label>Organization*</Form.Label>
										<Form.Control
											type="email"
											placeholder=""
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 form-half"
										controlId="formBasicEmail"
									>
										<Form.Label>Phone*</Form.Label>
										<Form.Control
											type="email"
											placeholder=""
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 form-half"
										controlId="formBasicEmail"
									>
										<Form.Label>Company email*</Form.Label>
										<Form.Control
											type="email"
											placeholder=""
										/>
									</Form.Group>
									<Form.Group
										className="mb-3 form-full"
										controlId="exampleForm.ControlTextarea1"
									>
										<Form.Label>
											Example textarea
										</Form.Label>
										<Form.Control as="textarea" rows={5} />
									</Form.Group>
								</Form>
								<div className="submit-from flex flex-col md:flex md:flex-row">
									<button
										className="submit-btn abra-font w-[100%] md:w-[fit-content] flex items-center justify-center text-center"
										type="submit"
									>
										Submit Now{" "}
										<i class="ri-arrow-right-up-line"></i>
									</button>
									<div className="icons-button mt-8 md:mt-0">
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
	);
};

export default Chat;
