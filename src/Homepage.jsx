import React from 'react'
import Logo from './images/logo.png'
import './styles/homepage.css'

export default function HomePage() {
  
  return (
    <>
      <img src={Logo} className='homepage-logo' />
      <h1>Shopping list</h1>
      <div className='homepage-content'>
        <p>Hello!</p>
        <p>We are happy to welcome you to our website!</p>
      </div>     
    </>
  )
}