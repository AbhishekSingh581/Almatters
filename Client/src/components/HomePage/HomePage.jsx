import React from 'react'
import './HomePage.css'
import Header from './Header/Header'
import NavBar from './Header/Nav/NavBar'

const HomePage = () => {
  return (
    <div id='homePage-container'>
      <NavBar/>        
      <Header/>
    </div>
  )
}

export default HomePage
