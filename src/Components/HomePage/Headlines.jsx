import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
	className: "center",
	centerMode: true,
	infinite: true,
	centerPadding: 0,
	slidesToShow: 3,
	speed: 500,
};

const Headlines = () => {
	return (
		<div className="slider-container h-[85vh]">
			<div className="headline-section white-bg mb-12">
				<h1 className="mb-0 headline-heading abra-font white-bg">
					Making Headlines
				</h1>
				<p className="mb-0 sub-head-headline white-bg">
					To get featured in multiple news articles gives us immense
					joy
				</p>
			</div>

			<Slider {...settings}>
				<div className=" flex items-center rounded-xl">
					<div className="m-4">
						<img
							className="rounded-xl"
							src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
						/>
					</div>
				</div>
				<div className=" flex items-center rounded-xl">
					<div className="m-4">
						<img
							className="rounded-xl"
							src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
						/>
					</div>
				</div>
				<div className=" flex items-center rounded-2xl">
					<div className="m-4">
						<img
							className="rounded-xl"
							src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
						/>
					</div>
				</div>
				<div className="flex items-center rounded-xl">
					<div className="m-4">
						<img
							className="rounded-xl"
							src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
						/>
					</div>
				</div>
			</Slider>
		</div>
	);
};

export default Headlines;
