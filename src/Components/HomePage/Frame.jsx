import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import Autoplay module styles
import awardone from "../../Assets/startup award.svg";
import awardtwo from "../../Assets/award3.svg";

const Frame = () => {
	return (
		<div className="frame-section container-main">
			<div className="row">
				<div className="col-lg-12">
					<div className="frame-main">
						<div className="frame-awards">
							<h1 className="mb-0 wall-text abra-font">
								The Wall of Fame
							</h1>
							<p className="mb-0 wall-sub-text">
								Our awards and recognitions
							</p>
							<div className="automatic-slider">
								<Swiper
									spaceBetween={50} // Optional: Add space between slides (adjust as needed)
									slidesPerView={3} // Optional: Control how many slides are visible
									autoplay={{
										// Configure autoplay options
										delay: 1000, // Delay between transitions (in milliseconds)
										disableOnInteraction: false, // Allow user interaction to pause autoplay (optional)
									}}
								>
									<SwiperSlide>
										<img
											src={awardone}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src={awardtwo}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src={awardone}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src={awardtwo}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src={awardone}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src={awardtwo}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src={awardone}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									<SwiperSlide>
										<img
											src={awardtwo}
											alt=""
											className="awrad-img"
										/>
									</SwiperSlide>
									{/* Add more slides as needed */}
								</Swiper>
							</div>
						</div>
						<div className="frame-image">
							{/* Your image content here */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Frame;
