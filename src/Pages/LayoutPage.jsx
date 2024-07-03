import React from "react";
import Navbar from ".././Outlets/Navbar";
import { Outlet } from "react-router-dom";
const LayoutPage = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
		</div>
	);
};

export default LayoutPage;
