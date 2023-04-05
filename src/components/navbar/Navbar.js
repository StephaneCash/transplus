import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <div className='logo'>
          <img src="./logo.jpg" alt="Logo" />
          <span>TRANSPLUS</span>
        </div>
      </Link>
      <ul>
        <li>
          <a href="#d">Accueil</a>
          <a href="#d">Nos offres</a>
          <a href="#d">Nos solutions</a>
          <a href="#d">Services</a>
          <a href="#d">Société</a>
          <a href="#d">Carrières</a>
          <a href="#d">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar