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
					<div className="frame-main flex items-center justify-between">
						<div className="frame-awards">
							<h1 className="mb-0 wall-text abra-font">
								The Wall of Fame
							</h1>
							<p className="mb-0 wall-sub-text">
								Our awards and recognitions
							</p>
							<div className="mt-4">
								<Swiper
									centeredSlides
									effect="coverflow"
									coverflowEffect={{
										rotate: 0,
										stretch: 0,
										depth: 100,
										modifier: 1,
										slideShadows: false,
									}}
									spaceBetween={10} // Optional: Add space between slides (adjust as needed)
									slidesPerView={3} // Optional: Control how many slides are visible
									autoplay={{
										// Configure autoplay options
										delay: 1000, // Delay between transitions (in milliseconds)
										disableOnInteraction: false, // Allow user interaction to pause autoplay (optional)
									}}
									initialSlide={1}
								>
									<SwiperSlide>
										<img src={awardone} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={awardtwo} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={awardone} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={awardtwo} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={awardone} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={awardtwo} alt="" />
									</SwiperSlide>
									<SwiperSlide>
										<img src={awardone} alt="" />
									</SwiperSlide>

									{/* Add more slides as needed */}
								</Swiper>
							</div>
						</div>
						<div>
							{/* Your image content here */}
							<img src="/assets/amna.svg" alt="amna" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Frame;
