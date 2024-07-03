import React from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import { ArrowForward } from "@mui/icons-material";
const Navbar = () => {
	return (
		<div className="nav-main black-bg">
			<div className="container-main">
				<div className="navbar-main">
					<div className="logo-nav">
						<img src={logo} className="logo-main" alt="" />
					</div>
					<div className="item-nav">
						<ul className="mb-0 nav-item-list-dv">
							<li>
								<Link
									className="nav-item active-nav"
									to="/about"
								>
									Home
								</Link>
							</li>
							<li>
								<Link className="nav-item" to="/about">
									Services
								</Link>
							</li>
							<li>
								<Link className="nav-item" to="/about">
									Culture
								</Link>
							</li>
							<li>
								<Link className="nav-item" to="/about">
									Case Studies
								</Link>
							</li>
							<li>
								<Link className="nav-item" to="/about">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div className="btn-nav">
						<Link
							className="btn proposal-btn primary-bg abra-font"
							to="/about"
						>
							GET A PROPOSAL <ArrowForward />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
