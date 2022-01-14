import React from 'react'
import Logo from './images/logo.png'
import './styles/homepage.css'

export default function HomePage() {
  
  return (
    <>
      <img src={Logo} className='homepage-logo' />
      <div className='homepage-title'>Shopping list</div>
      <div className='homepage-content'>
        <p>Hello!</p>
        <div className='homepage-text'>
        <p>We are happy to welcome you to our website! </p>
        <p>You can click on the button and add orders.</p>
        </div>
      </div>     
    </>
  )
}