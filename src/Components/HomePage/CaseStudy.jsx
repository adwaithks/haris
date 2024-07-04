import React, { useState } from "react";

const CaseStudy = () => {
	const contents = {
		"Performance Marketing": [
			{
				image: "https://images.unsplash.com/photo-1581091870621-2a72e27ae140",
				heading: "From 0 to Rs. 6 Million Revenue Per month (4+ ROAS)",
				description:
					"Explore how we transformed Bluetyga into a revenue-generating company from scratch.",
				date: "March 8, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1580879794458-548f1dd7b136",
				heading: "Scaling Your Startup with Effective PPC Strategies",
				description:
					"Discover the best practices and case studies of successful PPC campaigns.",
				date: "April 15, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1567427015065-79511f8d84a0",
				heading: "Mastering Facebook Ads for E-commerce Success",
				description:
					"A deep dive into optimizing Facebook ad campaigns for higher ROI.",
				date: "May 20, 2024",
			},
		],
		SEO: [
			{
				image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
				heading: "The Ultimate Guide to On-Page SEO",
				description:
					"Learn the essential elements of on-page SEO to boost your search rankings.",
				date: "January 5, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1487412912498-0447578fcca8",
				heading: "SEO Trends to Watch in 2024",
				description:
					"Stay ahead of the curve with these upcoming SEO trends.",
				date: "February 12, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec",
				heading: "Building a Link-Building Strategy for 2024",
				description:
					"Effective strategies to build high-quality backlinks and improve your SEO.",
				date: "March 22, 2024",
			},
		],
		"PR & Communication": [
			{
				image: "https://images.unsplash.com/photo-1581091870677-41c4af8c4b2b",
				heading: "Crafting the Perfect Press Release",
				description:
					"Tips and tricks for writing impactful press releases.",
				date: "January 18, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1590650046875-d8b214a8a8b3",
				heading: "Managing Crisis Communication",
				description:
					"How to effectively manage communication during a crisis.",
				date: "February 25, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1573164713774-1b1c6e0636d8",
				heading: "Building Media Relationships",
				description:
					"Strategies to develop and maintain strong relationships with the media.",
				date: "March 30, 2024",
			},
		],
		"Social Media": [
			{
				image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
				heading: "Creating Engaging Content for Instagram",
				description:
					"Best practices for crafting content that resonates with your audience on Instagram.",
				date: "January 12, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
				heading: "Leveraging LinkedIn for B2B Marketing",
				description:
					"How to use LinkedIn to connect with B2B audiences and generate leads.",
				date: "February 19, 2024",
			},
			{
				image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
				heading: "Effective Social Media Advertising Strategies",
				description:
					"Techniques to maximize the ROI of your social media ad campaigns.",
				date: "March 27, 2024",
			},
		],
	};

	const [currentTab, setCurrentTab] = useState("Performance Marketing");

	const currentContent = contents[currentTab];

	return (
		<div className="w-[90%] mx-auto mt-24">
			<div className="flex flex-col justify-center items-center">
				<h1
					className="text-5xl font-bold"
					style={{
						fontFamily: "abro",
					}}
				>
					Our Case Studies
				</h1>
				<h2 className="text-lg font-normal">
					Read in detail about the stories of victories
				</h2>
			</div>
			<div
				className="my-6 overflow-x-auto h-12"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					whiteSpace: "nowrap",
				}}
			>
				{Object.keys(contents).map((name, index) => {
					return (
						<p
							style={{
								cursor: "pointer",
								color: currentTab === name ? "black" : "gray",
								margin: "0 1rem", // Add some margin for spacing
							}}
							className="font-semibold text-sm sm:text-lg"
							onClick={() => setCurrentTab(name)}
							key={index}
						>
							{name}
						</p>
					);
				})}
			</div>

			<div className="md:h-[550px] flex-col md:flex md:flex-row gap-2">
				<div className="h-[100%] md:w-[50%] w-[100%] mb-2 md:mb-0 flex flex-col p-2 border-2 rounded-xl shadow-xl">
					<img
						alt="test"
						className="h-[100px] mb-2 w-[100%] flex-1 rounded-xl"
						src={currentContent[0].image}
					/>
					<h1 className="font-semibold text-sm lg:text-2xl">
						{currentContent[0].heading}
					</h1>
					<h2 className="text-gray-500 lg:text-lg text-xs my-2">
						{currentContent[0].date}
					</h2>
					<h2 className="lg:text-lg text-sm">
						{currentContent[0].description}
					</h2>
				</div>
				<div className="md:w-[50%] flex flex-col h-[100%] justify-between gap-2">
					<div className="h-[50%] flex p-2 border-2 rounded-xl shadow-xl mb-2 md:mb-0">
						<img
							alt="loading"
							className="w-[50%] rounded-xl mr-2"
							src={currentContent[1].image}
						/>
						<div className="w-[50%]">
							<h1 className="font-semibold  text-sm lg:text-2xl">
								{currentContent[1].heading}
							</h1>
							<h2 className="text-gray-500 my-2 lg:text-lg text-xs">
								{currentContent[1].date}
							</h2>
							<h2 className="lg:text-lg text-sm">
								{currentContent[1].description}
							</h2>
						</div>
					</div>
					<div className="h-[50%] flex p-2 border-2 rounded-xl shadow-xl mb-2 md:mb-0">
						<img
							alt="small img"
							className="w-[50%] rounded-xl mr-2"
							src={currentContent[2].image}
						/>
						<div className="w-[50%]">
							<h1 className="font-semibold  text-sm lg:text-2xl">
								{currentContent[2].heading}
							</h1>
							<h2 className="text-gray-500 my-2 lg:text-lg text-xs">
								{currentContent[2].date}
							</h2>
							<h2 className="lg:text-lg text-sm">
								{currentContent[2].description}
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CaseStudy;
