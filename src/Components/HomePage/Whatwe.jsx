import React, { useState } from "react";
import servicelogoone from "../../Assets/seo logo 1.svg";
import servicelogotwo from "../../Assets/Performance 1.svg";
import servicelogothree from "../../Assets/Social media (1) 1.svg";
import servicelogofour from "../../Assets/Web (1) 1.svg";
import servicelogofive from "../../Assets/Branding (1) 1.svg";
import team from "../../Assets/seo_png_1-removebg-preview.png";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import AccordionItem from "../custom/AccordionItem";
import CallReceivedIcon from "@mui/icons-material/CallReceived";

const Whatwe = () => {
	const [mouseHover, setMouseHover] = useState(false);

	const [accordionStates, setAccordionStates] = useState([
		false,
		false,
		false,
		false,
		false,
	]);

	return (
		<div className="lg:top-[-300px] lg:sticky lg:z-10 container-main">
			<div className="services-section">
				<h1 className="service-heading-text mb-0 abra-font">
					What We Have for You
				</h1>
				<div className="tab-div">
					<Tab.Container
						id="left-tabs-example"
						defaultActiveKey="first"
					>
						<div className="sub-tab">
							<Nav variant="pills" className="">
								<Nav.Item>
									<Nav.Link eventKey="first">
										<AccordionItem
											state={accordionStates[0] === true}
											onClick={() => {
												if (accordionStates[0] === true)
													setAccordionStates([
														false,
														false,
														false,
														false,
														false,
													]);
												else
													setAccordionStates([
														true,
														false,
														false,
														false,
														false,
													]);
											}}
											title={
												<div className="flex items-center">
													<img
														src={servicelogoone}
														className="service-logo"
														alt=""
													/>
													<h4 className="ml-5 mb-0 abra-font service-text">
														SEO
													</h4>
												</div>
											}
										>
											<p className="text-white">
												To appear on top of Google
												search results and get more
												website visitors, leads and
												revenue.
											</p>
										</AccordionItem>
									</Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="second">
										<AccordionItem
											state={accordionStates[1] === true}
											onClick={() => {
												if (accordionStates[1] === true)
													setAccordionStates([
														false,
														false,
														false,
														false,
														false,
													]);
												else
													setAccordionStates([
														false,
														true,
														false,
														false,
														false,
													]);
											}}
											title={
												<div className="flex items-center">
													<img
														src={servicelogotwo}
														className="service-logo-small"
														alt=""
													/>
													<h4 className="ml-5 mb-0 abra-font service-text">
														Performance Marketing
													</h4>
												</div>
											}
										>
											<p className="text-white">
												To appear on top of Google
												search results and get more
												website visitors, leads and
												revenue.
											</p>
										</AccordionItem>
									</Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="tree">
										<AccordionItem
											state={accordionStates[2] === true}
											onClick={() => {
												if (accordionStates[2] === true)
													setAccordionStates([
														false,
														false,
														false,
														false,
														false,
													]);
												else
													setAccordionStates([
														false,
														false,
														true,
														false,
														false,
													]);
											}}
											title={
												<div className="flex items-center">
													<img
														src={servicelogothree}
														className="service-logo-small"
														alt=""
													/>
													<h4 className="ml-5 mb-0 abra-font service-text">
														Social Media
													</h4>
												</div>
											}
										>
											<p className="text-white">
												To appear on top of Google
												search results and get more
												website visitors, leads and
												revenue.
											</p>
										</AccordionItem>
									</Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link eventKey="four">
										<AccordionItem
											state={accordionStates[3] === true}
											onClick={() => {
												if (accordionStates[3] === true)
													setAccordionStates([
														false,
														false,
														false,
														false,
														false,
													]);
												else
													setAccordionStates([
														false,
														false,
														false,
														true,
														false,
													]);
											}}
											title={
												<div className="flex items-center">
													<img
														src={servicelogofour}
														className="service-logo-small"
														alt=""
													/>
													<h4 className="ml-5 mb-0 abra-font service-text">
														Web Development
													</h4>
												</div>
											}
										>
											<p className="text-white">
												To appear on top of Google
												search results and get more
												website visitors, leads and
												revenue.
											</p>
										</AccordionItem>
									</Nav.Link>
								</Nav.Item>

								<Nav.Item>
									<Nav.Link
										style={{ width: "100%" }}
										eventKey="five"
									>
										<AccordionItem
											state={accordionStates[4] === true}
											onClick={() => {
												if (accordionStates[4] === true)
													setAccordionStates([
														false,
														false,
														false,
														false,
														false,
													]);
												else
													setAccordionStates([
														false,
														false,
														false,
														false,
														true,
													]);
											}}
											title={
												<div className="flex items-center">
													<img
														src={servicelogofive}
														className="service-logo-small"
														alt=""
													/>
													<h4 className="ml-5 mb-0 abra-font service-text">
														Branding
													</h4>
												</div>
											}
										>
											<p className="text-white">
												To appear on top of Google
												search results and get more
												website visitors, leads and
												revenue.
											</p>
										</AccordionItem>
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</div>
						<div className="sub-tab hidden md:block">
							<Tab.Content>
								<Tab.Pane eventKey="first" className="relative">
									{mouseHover && (
										<div className="absolute right-0 top-0 flex items-center justify-end">
											<CallReceivedIcon
												style={{
													color: "#33bd91",
													fontSize: 70,
												}}
											/>
										</div>
									)}
									<img
										onMouseEnter={(e) =>
											setMouseHover(true)
										}
										onMouseLeave={(e) =>
											setMouseHover(false)
										}
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane
									eventKey="second"
									className="relative"
								>
									{mouseHover && (
										<div className="absolute right-0 top-0 flex items-center justify-end">
											<CallReceivedIcon
												style={{
													color: "#33bd91",
													fontSize: 70,
												}}
											/>
										</div>
									)}
									<img
										onMouseEnter={(e) =>
											setMouseHover(true)
										}
										onMouseLeave={(e) =>
											setMouseHover(false)
										}
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane className="relative" eventKey="tree">
									{mouseHover && (
										<div className="absolute right-0 top-0 flex items-center justify-end">
											<CallReceivedIcon
												style={{
													color: "#33bd91",
													fontSize: 70,
												}}
											/>
										</div>
									)}
									<img
										onMouseEnter={(e) =>
											setMouseHover(true)
										}
										onMouseLeave={(e) =>
											setMouseHover(false)
										}
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane className="relative" eventKey="four">
									{mouseHover && (
										<div className="absolute right-0 top-0 flex items-center justify-end">
											<CallReceivedIcon
												style={{
													color: "#33bd91",
													fontSize: 70,
												}}
											/>
										</div>
									)}
									<img
										onMouseEnter={(e) =>
											setMouseHover(true)
										}
										onMouseLeave={(e) =>
											setMouseHover(false)
										}
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane className="relative" eventKey="five">
									{mouseHover && (
										<div className="absolute right-0 top-0 flex items-center justify-end">
											<CallReceivedIcon
												style={{
													color: "#33bd91",
													fontSize: 70,
												}}
											/>
										</div>
									)}
									<img
										onMouseEnter={(e) =>
											setMouseHover(true)
										}
										onMouseLeave={(e) =>
											setMouseHover(false)
										}
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
							</Tab.Content>
						</div>
					</Tab.Container>
				</div>
			</div>
		</div>
	);
};

export default Whatwe;
