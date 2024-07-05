import React, { useRef } from "react";

const AccordionItem = ({ state, onClick, title, children }) => {
	const contentRef = useRef(null);

	return (
		<div style={styles.container}>
			<div onClick={onClick} style={styles.title}>
				{title}
			</div>
			<div
				ref={contentRef}
				style={{
					...styles.content,
					maxHeight: state
						? `${contentRef?.current?.scrollHeight}px`
						: "0px",
					transition: "max-height 0.3s ease",
				}}
			>
				<div className="w-full">{children}</div>
			</div>
		</div>
	);
};

const styles = {
	container: {
		borderRadius: "5px",
		marginBottom: "10px",
		width: "100%",
	},
	title: {
		padding: "10px",
		cursor: "pointer",
	},
	content: {
		overflow: "hidden",
		width: "100%",
	},
};

export default AccordionItem;
