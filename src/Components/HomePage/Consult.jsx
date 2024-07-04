import React from "react";
import { Link } from "react-router-dom";
const Consult = () => {
	return (
		<div className="col-lg-12">
			<div className="consult-section">
				<div className="consult-content">
					<h1 className="bebas-neue-regular mb-0 text-white text-2xl md:text-6xl">
						Let's Discuss How We Can Grow{" "}
						<span className="block-text bebas-neue-regular">
							Your Business
						</span>{" "}
					</h1>
				</div>
				<div className="w-[50%] relative">
					<Link
						className="btn consult-btn primary-bg abra-font"
						to="/about"
					>
						Consult Us
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Consult;
