import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " id='navBar-container'>
      <a className="navbar-brand" href="/">Almatters</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navListdiv" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/">User generated content</a>
              <a className="dropdown-item" href="/">Online courses</a>
              <a className="dropdown-item" href="/">News and Blogs</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Contacts</a>
          </li>
        </ul>
        
      </div>
    </nav>
  )
}

export default NavBar
