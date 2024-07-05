import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Hero = () => {
	const [mouseOver, setMouseOver] = useState(false);

	const [currentImage, setCurrentImage] = useState(0); // State to track current image index

	const images = ["./assets/founder.svg"];

	useEffect(() => {
		// Function to change image every 3 seconds
		const interval = setInterval(() => {
			setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000); // Change image every 3000 milliseconds (3 seconds)

		return () => clearInterval(interval); // Clean up interval on component unmount
	}, [images.length]); // Dependency array to ensure interval is set correctly

	return (
		<div className="award-winning ">
			<div className="md:w-[50%] w-[100%]">
				<h1 className="mb-0 heading-text-hero">
					An{" "}
					<span className="primary-color fw abra-font">
						Award-winning
					</span>{" "}
					Digital{" "}
					<span className="block-text abra-font fw">
						{" "}
						Marketing Agency in Kerala{" "}
					</span>
				</h1>
				<p className="mb-0 sub-text-hero">
					A digital marketing company that’s on the course of powering
					up brands{" "}
					<span className="block-text">
						{" "}
						with the power of marketing, design and tech.{" "}
					</span>
				</p>
				<div className="button-dv">
					<Link
						onMouseOver={() => setMouseOver(true)}
						onMouseLeave={() => setMouseOver(false)}
						className="btn proposal-btn primary-bg abra-font"
						to="/about"
					>
						GET A PROPOSAL
						{mouseOver ? (
							<ArrowForwardIcon />
						) : (
							<ArrowOutwardIcon />
						)}
					</Link>
					<Link
						className="btn proposal-btn abra-font md:mt-2 mt-3"
						to="/about"
					>
						Consult With Us
					</Link>
				</div>
				<div className="count-dv">
					<div className="w-[25%] md:border-r-2 md:border-r-white">
						<h4 className="mb-0 number-text abra-font text-xs ">
							600M+
						</h4>
						<p className="mb-0 number-text-sub abra-font  md:text-md text-xs">
							Revenue{" "}
							<span className="block-text abra-font">
								Generated
							</span>
						</p>
					</div>

					<div className="w-[25%] left-space md:border-r-2 md:border-r-white">
						<h4 className="mb-0 number-text abra-font">150+</h4>
						<p className="mb-0 number-text-sub abra-font  md:text-md text-xs">
							Clients{" "}
						</p>
					</div>

					<div className="w-[25%] left-space md:border-r-2 md:border-r-white">
						<h4 className="mb-0 number-text abra-font">1000+</h4>
						<p className="mb-0 number-text-sub abra-font  md:text-md text-xs">
							Projects
						</p>
					</div>

					<div className="w-[25%] left-space md:border-r-2 md:border-r-white">
						<h4 className="mb-0 number-text abra-font">05</h4>
						<p className="mb-0 number-text-sub abra-font  md:text-md text-xs">
							National-level{" "}
							<span className="block-text abra-font">Awards</span>{" "}
						</p>
					</div>
				</div>
			</div>
			<div className="ceo-image md:block hidden">
				<img
					src={images[currentImage]}
					className="founder-img"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Hero;
