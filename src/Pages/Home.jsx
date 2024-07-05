import React from "react";
import Hero from "../Components/HomePage/Hero";
import Brands from "../Components/HomePage/Brands";
import About from "../Components/HomePage/About";
import Frame from "../Components/HomePage/Frame";
import Whatwe from "../Components/HomePage/Whatwe";
import Headlines from "../Components/HomePage/Headlines";
import Consult from "../Components/HomePage/Consult";
import Clients from "../Components/HomePage/Clients";
import Chat from "../Components/HomePage/Chat";
import Map from "../Components/HomePage/Map";
import Faq from "../Components/HomePage/Faq";
import CaseStudy from "../Components/HomePage/CaseStudy";
import Footer from "../Outlets/Footer";

const Section2 = () => {
	return (
		<div className="white-bgs relative z-50">
			<Headlines />

			<div className="container-main">
				<Consult />
			</div>
			<CaseStudy />
			<Clients />
			<Chat />
			<Map />
			<Faq />
		</div>
	);
};

const Home = () => {
	return (
		<div className="black-bg  main-wrapper relative">
			<div className="relative z-30 home-page black-bg">
				<div className="container-main">
					<Hero />
				</div>

				<div className="">
					<Brands />
					<About />
					<Frame />
					<Whatwe />
					<div className="black-bg divider-space"></div>
					<Section2 />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
