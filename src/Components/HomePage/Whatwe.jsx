import React from "react";
import servicelogoone from "../../Assets/seo logo 1.svg";
import servicelogotwo from "../../Assets/Performance 1.svg";
import servicelogothree from "../../Assets/Social media (1) 1.svg";
import servicelogofour from "../../Assets/Web (1) 1.svg";
import servicelogofive from "../../Assets/Branding (1) 1.svg";
import team from "../../Assets/seo_png_1-removebg-preview.png";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import AccordionItem from "../custom/AccordionItem";
const Whatwe = () => {
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
								<Tab.Pane eventKey="first">
									<img
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<img
										src={team}
										className="seo-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane eventKey="tree">
									<img
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane eventKey="four">
									<img
										src={team}
										className="seo-team-png"
										alt=""
									/>
								</Tab.Pane>
								<Tab.Pane eventKey="five">
									<img
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
