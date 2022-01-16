import React from 'react';
import './styles/homepage.css';
import Logo from './images/logo.png';

export default function HomePage({ items }) {

  return (
    <>
      {items.length > 0
        ? null
        : <img src={Logo} className='homepage-logo' />}

      <div className='homepage-title'>Shopping list</div>

      {items.length > 0
        ? null
        : <div className='homepage-content'>
          <p>Hello!</p>
          <div className='homepage-text'>
            <p>We are happy to welcome you to our website!</p>
            <p>You can click on the button and add orders.</p>
          </div>
        </div>}
    </>
  );
}