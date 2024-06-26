import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import awardone from '../../Assets/startup award.svg'
import awardtwo from '../../Assets/award3.svg'
import awardthree from '../../Assets/pepper award.svg'
const Frame = () => {
	return (
		<div className="frame-section">
			<div className="row">
				<div className='col-lg-12'>
					<div className="frame-main">
						<div className="frame-awards">
								<h1 className='mb-0 wall-text abra-font'>The Wall of Fame</h1>
								<p className='mb-0 wall-sub-text'>Our awards and recognitions</p>
								<div className="automatic-slider">
									<Swiper
									  spaceBetween={50} slidesPerView={3} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} 	>
										<SwiperSlide>
												<img src={awardone} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>
												<img src={awardthree} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>	
												<img src={awardtwo} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>
												<img src={awardone} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>
												<img src={awardthree} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>
												<img src={awardtwo} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>
												<img src={awardone} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>
												<img src={awardthree} alt="" className='awrad-img' />
										</SwiperSlide>
										<SwiperSlide>
												<img src={awardtwo} alt="" className='awrad-img' />
										</SwiperSlide>
									</Swiper>
								</div>
						</div>
						<div className="frame-image">

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Frame