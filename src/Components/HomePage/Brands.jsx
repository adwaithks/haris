import React from 'react'
import { CCollapse } from '@coreui/react';
import logo from '../../Assets/logo.svg'
import logotwo from '../../Assets/WA 1.svg'
import { useState } from 'react';

const initialLogos = [
  { id: 1, src: logo, alt: 'Logo 1 description' },
  { id: 2, src: logo, alt: 'Logo 1 description' },
  { id: 3, src: logo, alt: 'Logo 1 description' },
  { id: 4, src: logo, alt: 'Logo 1 description' },
  { id: 5, src: logo, alt: 'Logo 1 description' },
  { id: 6, src: logo, alt: 'Logo 1 description' },
  { id: 7, src: logotwo, alt: 'Logo 2 description' },
  { id: 11, src: logotwo, alt: 'Logo 2 description' },

  // ... logos for initial section
];

const collapsedLogos = [
  { id: 8, src: logo, alt: 'Logo 1 description' },
  { id: 9, src: logotwo, alt: 'Logo 2 description' },
	{ id: 12, src: logo, alt: 'Logo 1 description' },
  { id: 13, src: logotwo, alt: 'Logo 2 description' },
	{ id: 14, src: logo, alt: 'Logo 1 description' },
  { id: 15, src: logotwo, alt: 'Logo 2 description' },
	{ id: 16, src: logo, alt: 'Logo 1 description' },
  { id: 17, src: logotwo, alt: 'Logo 2 description' },
  // ... logos for collapsed section
];

const Brands = () => {
  const [visible, setVisible] = useState(false);

  const renderBrandLogos = (logos) => {
    return logos.map((logo) => (
      <img src={logo.src} className='brand-logo' alt={logo.alt} key={logo.id} />
    ));
  };

  return (
    <div className='row'>
      <div className="col-lg-12">
        <div className="brand-main">
          <div className="brands-section">
            {renderBrandLogos(initialLogos)}
          </div>
          <CCollapse visible={visible}>
            <div className="brands-section">
              {renderBrandLogos(collapsedLogos)}
            </div>
          </CCollapse>
          <div className="dropdown-button">
            <p className='mb-0 brand-dropdown-txt'>Brands that believe in us. Brands that have gone the extra mile with us. <button className='view-all btn' onClick={() => setVisible(!visible)}>View All</button></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brands
