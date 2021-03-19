import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const nav = () => {
  const year = new Date().getFullYear();

  return (
    <div className={'footerContainer'}>
      <a href='https://www.matteoprock.com/' target='_blank'>
        <div className='contactLink'>© {year}</div>
      </a>
    </div>
  );
};

export default nav;
