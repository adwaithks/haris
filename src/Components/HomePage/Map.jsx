import React from 'react'

const Map = () => {
	const myStyle = {
    border: '0',
  };
	return (
		<div className='map-main'>
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125218.4253922299!2d75.81081395000001!3d11.255834749999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65938563d4747%3A0x32150641ca32ecab!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1719612557497!5m2!1sen!2sin" width="100%" height="400" style={myStyle} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
		</div>
	)
}

export default Map