import React from "react";
import { Link } from "react-router-dom";
import CountUp from "../custom/CountUp";

const About = () => {
	return (
		<div className="about-main-section container-main">
			<div className="lg:flex lg:flex-row flex-col items-start ">
				<div className="md:w-[60%] w-[100%]">
					<div className="about-main">
						<h1 className="mb-0 about-main-heading abra-font">
							Here to Help Brands Dream Big,{" "}
							<span className="abra-font block-text">
								and Achieve Bigger.
							</span>
						</h1>
						<p className="mb-0 sub-text-aboutus">
							We've come a long way ever since we started our
							journey in 2020 as a digital marketing company with
							just 6 members and a handful of clients. Today,
							we're 100+ members strong, organised into 8
							departments, with a huge (and satisfied) clientele.
							The work culture, results and innovation are at the
							core of who we are.
						</p>
						<Link
							className="btn learn-btn primary-bg abra-font"
							to="/about"
						>
							Learn More About Us
						</Link>
					</div>
				</div>
				<div className="md:w-[40%] w-[100%] flex items-center md:justify-center justify-start md:mt-0 mt-4">
					<div className="">
						<div className="count-block">
							<h1 className="flex flex-col abra-font mb-0 count-text">
								2020{" "}
								<span className="block-text abra-font count-small">
									Established Year
								</span>
							</h1>
						</div>
						<div className="count-block">
							<h1 className="flex abra-font mb-0 count-text">
								<CountUp duration={1000} target={100} />+{" "}
							</h1>
							<span className="count-text block-text abra-font count-small">
								Employees
							</span>
						</div>
						<div className="count-block">
							<h1 className=" flex abra-font mb-0 count-text">
								<CountUp duration={1000} target={8} />+
							</h1>
							<span className="count-text block-text abra-font count-small">
								Departments
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
