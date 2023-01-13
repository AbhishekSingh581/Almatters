import React from 'react'
import './NavBar.css'
import logo from '../../../../imgUpload/Almatters_Logo.png'
const NavBar = () => {
  return (
    <header id="nav-container">
      <a href="#" id='navBar-name'><span>Almatters</span></a>
      <div className='navBar-items'>
        <div className="items"><a href="#">Home</a></div>
        <div className="items"><a href="#">About Us</a></div>
        <div className="items"><a href="#">Service</a></div>
        <div className="items"><a href="#">Contact US</a></div>
      </div>
        
    </header>
  )
}

export default NavBar
