import React, { useState, useRef } from "react";

const AccordionItem = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef(null);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div style={styles.container}>
			<div onClick={toggleAccordion} style={styles.title}>
				{title}
			</div>
			<div
				ref={contentRef}
				style={{
					...styles.content,
					maxHeight: isOpen
						? `${contentRef?.current?.scrollHeight}px`
						: "0px",
					transition: "max-height 0.3s ease",
				}}
			>
				<div style={styles.innerContent}>{children}</div>
			</div>
		</div>
	);
};

const styles = {
	container: {
		borderRadius: "5px",
		marginBottom: "10px",
		overflow: "hidden",
	},
	title: {
		padding: "10px",
		cursor: "pointer",
	},
	content: {
		overflow: "hidden",
	},
	innerContent: {
		padding: "10px",
	},
};

export default AccordionItem;
