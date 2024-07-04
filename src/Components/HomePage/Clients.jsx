import React, { useEffect, useState } from "react";
import google from "../../Assets/Frame 14.svg";
import user from "../../Assets/Ellipse 7.svg";

const reviews = [
	{
		name: "Lorem Ipsum",
		text: "“Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore “Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore””",
		userName: "Lorem",
		userDesc: "lorem ipsum",
	},
	{
		name: "Lorem Ipsum 2 ",
		text: "“Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore “Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore””",
		userName: "Lorem",
		userDesc: "lorem ipsum",
	},
	{
		name: "Lorem Ipsum 3",
		text: "“Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore “Lorem ipsum dolor sit amet, consectetur dori adipiscing elit, sed do eiusmod tempor kil incididunt ut labore et dolore””",
		userName: "Lorem",
		userDesc: "lorem ipsum",
	},
	// Add more reviews here
];

const Review = ({ review, isVisible }) => (
	<div
		className={`w-full max-w-[500px] rounded-2xl bg-black transition-opacity duration-1000 ${
			isVisible ? "opacity-100" : "opacity-0"
		} absolute right-0`}
	>
		<div className="review-main">
			<div className="review-box p-4 rounded shadow-md">
				<h4 className="text-white reviewer-name mb-0">{review.name}</h4>
				<p className="review-text mb-0">{review.text}</p>
				<div className="rev-profile  flex items-center">
					<img
						src={user}
						className="user-img w-12 h-12 rounded-full mr-4"
						alt=""
					/>
					<div className="user-name-dv">
						<h5 className="mb-0 user-name">{review.userName}</h5>
						<p className="mb-0 user-desc text-gray-500">
							{review.userDesc}
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const Clients = () => {
	const [visibleReview, setVisibleReview] = useState(0);
	const [isDelayed, setIsDelayed] = useState(false);

	useEffect(() => {
		const changeReview = () => {
			setIsDelayed(true);
			setTimeout(() => {
				setVisibleReview((prev) => (prev + 1) % reviews.length);
				setIsDelayed(false);
			}, 1000); // Delay before fade-in
		};

		const interval = setInterval(changeReview, 2000); // 2 seconds interval (1 second delay + 1 second display time)

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="clients-reviews py-8">
			<div className="container mx-auto">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<div className="w-full md:w-1/2 mb-8 md:mb-0">
						<div className="review-main">
							<h1 className="clients-heading mb-2 abra-font">
								Client Reviews
							</h1>
							<p className="mb-4 clients-sub">
								Here is what our clients have to say about our
								service
							</p>
							<img src={google} className="clients-logo" alt="" />
						</div>
					</div>

					<div className="relative w-full md:w-1/2 h-[250px]">
						{reviews.map((review, index) => (
							<Review
								key={index}
								review={review}
								isVisible={
									index === visibleReview && !isDelayed
								}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clients;
