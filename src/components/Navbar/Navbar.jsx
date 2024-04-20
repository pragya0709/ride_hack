import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (

    <nav className="container">
      <div className="logo-title">
        <img src={logo} alt="" className="logo" />
        <h1 className="logo-name">MediBargain</h1>
      </div>
        <ul>  
          <li className="elements">Home</li>
          <li className="elements">About Us</li>
          <li> <button className="btn">Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
