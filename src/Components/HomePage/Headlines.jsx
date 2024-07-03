import React, { useState } from "react";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideComp = ({ url }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			onMouseEnter={(e) => {
				setIsHovered(true);
			}}
			onMouseLeave={() => setIsHovered(false)}
			className="flex items-center rounded-xl"
		>
			<div className="relative rounded-xl">
				<img className="brightness-75 rounded-xl" src={url} alt="img" />
				{isHovered && (
					<div className="pointer-events-none opacity-70 absolute top-0 right-0 h-[100%] w-[100%] bg-yellow-300 rounded-xl">
						<CallReceivedIcon
							className="absolute top-5 right-5"
							style={{
								color: "white",
								fontSize: 50,
							}}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

const Headlines = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: 0,
		slidesToShow: 3,
		speed: 500,
	};

	return (
		<div className="overflow-x-clip slider-container">
			<div className="headline-section white-bg mb-12">
				<h1 className="mb-0 headline-heading abra-font white-bg">
					Making Headlines
				</h1>
				<p className="mb-0 sub-head-headline white-bg">
					To get featured in multiple news articles gives us immense
					joy
				</p>
			</div>

			<Slider arrows autoplay dots {...settings}>
				<SlideComp url="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
				<SlideComp url="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
				<SlideComp url="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
				<SlideComp url="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
				<SlideComp url="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" />
			</Slider>
		</div>
	);
};

export default Headlines;
