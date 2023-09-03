import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ContextApp } from "../../AppContext";
import { FaArrowCircleRight } from "react-icons/fa";
import logo from "../../assets/logo.png"
import Header from "../header/Header";
import { FiArrowRightCircle } from "react-icons/fi";

const Navbar = () => {

  const { dataUser, setDataUser } = useContext(ContextApp);
  const [showItem, setShowItem] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setDataUser(null);
  };

  function displayMenu() {
    let nav = document.querySelector('nav');
    nav.classList.toggle('active');
  };

  useEffect(() => {
    let nav = document.querySelector('nav');
    let links = document.querySelectorAll('nav li');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove("active")
      })
    })
  }, []);

  return (
    <>
      <Header />
      <nav className="navBar">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
          <span>Transplus</span>
        </Link>

        <ul>
          <div id='icons' onClick={() => displayMenu()}></div>
          <li> <Link to="#domaine" className="item"> <span> A propos</span>  </Link></li>
          <li><Link to="#d" className="item"> <span>Nos services</span>   </Link></li>
          <li> <Link to="#d" className="item"> <span>Nos solutions</span>   </Link></li>
          <li> <Link to="#d" className="item"> <span>Nos offres d 'emploi</span>  </Link></li>
          <li><Link to="#d" className="item"> <span>Confiance</span>   </Link></li>
          <li><Link to="#d" className="item"> <span>Partenaires</span>   </Link></li>

          <li className="btnIbnscr">
            <Link
              to="/signup"
              className="btnInscrisToi"
            >
              <div>Inscris-toi</div>
              <FiArrowRightCircle size={20} />
            </Link>
          </li>
        </ul>

        <Link
          to="/signup"
          className="btnInscrisToi"
        >
          <div>Inscris-toi</div>
          <FiArrowRightCircle size={20} />
        </Link>

        <div id='icons' onClick={() => displayMenu()}></div>
      </nav>
    </>
  );
};

export default Navbar;
