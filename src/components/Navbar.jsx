import React from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
    
     <img src={logo} alt="logo" className="logo" />

     <div className="menu">
       <Link activeClass="active" to="intro" spy={true} offset={-100} duration={500} className="home">Home</Link>
       <Link activeClass="active" to="skills" spy={true} offset={-100} duration={500} className="about">About</Link>
       <Link activeClass="active" to="work" spy={true} offset={-100} duration={500} className="portfolio">Portfolio</Link>
       <Link activeClass="active" to="project" spy={true} offset={-100} duration={500} className="project">Projects</Link>
     </div>
     <button className="menubtn" onClick={ () => {
      document.getElementById('contactsec').scrollIntoView(({behavior: 'smooth'}))
     }}>Contact</button>

    </nav>
  )
}

export default Navbar