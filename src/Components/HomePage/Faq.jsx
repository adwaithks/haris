import React from 'react'
import Accordion from 'react-bootstrap/Accordion';	
const Faq = () => {
	return (
		<div className='faq-section'>
			<div className="container-main">
				<div className="row">
					<div className="col-lg-12">
						<div className="faq-main">
							<h1 className='faq-heading mb-0 text-center abra-font'>FAQs</h1>
							<div className="collapse-main">
								<Accordion defaultActiveKey="0">
									<Accordion.Item eventKey="0">
										<Accordion.Header> What are the types of businesses for which you provide digital marketing services?</Accordion.Header>
										<Accordion.Body>
											<p className='mb-0 faq-sub'>We focus mainly on D2C, B2B and B2C companies. Get in touch with us to learn how we can help your business thrive. </p>
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header>Where are most of your clients from?</Accordion.Header>
											<Accordion.Body>
												<p className='mb-0 faq-sub'>We focus mainly on D2C, B2B and B2C companies. Get in touch with us to learn how we can help your business thrive. </p>
											</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header>How can I measure the success of my digital marketing campaigns?</Accordion.Header>
											<Accordion.Body>
												<p className='mb-0 faq-sub'>We focus mainly on D2C, B2B and B2C companies. Get in touch with us to learn how we can help your business thrive. </p>
											</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header>What type of marketing will I need for my business?</Accordion.Header>
											<Accordion.Body>
												<p className='mb-0 faq-sub'>We focus mainly on D2C, B2B and B2C companies. Get in touch with us to learn how we can help your business thrive. </p>
											</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="4">
										<Accordion.Header>Can I see results quickly with digital marketing?</Accordion.Header>
											<Accordion.Body>
												<p className='mb-0 faq-sub'>We focus mainly on D2C, B2B and B2C companies. Get in touch with us to learn how we can help your business thrive. </p>
											</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq