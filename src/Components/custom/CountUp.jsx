import React, { useState, useEffect, useRef } from "react";

const CountUp = ({ target, duration }) => {
	const [count, setCount] = useState(0);
	const [isInView, setIsInView] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const cur = ref.current;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.unobserve(ref.current);
				}
			},
			{ threshold: 0.1 }
		);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (cur) {
				observer.unobserve(cur);
			}
		};
	}, []);

	useEffect(() => {
		if (isInView) {
			let start = 0;
			const end = target;
			const increment = end / (duration / 100);
			const timer = setInterval(() => {
				start += increment;
				if (start >= end) {
					setCount(end);
					clearInterval(timer);
				} else {
					setCount(Math.ceil(start));
				}
			}, 100);
			return () => clearInterval(timer);
		}
	}, [isInView, target, duration]);

	return (
		<h1 ref={ref} className="abra-font mb-0">
			{count < 10 ? `0${count}` : count}
		</h1>
	);
};

export default CountUp;
