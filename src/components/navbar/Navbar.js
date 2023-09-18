import React, { useContext, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ContextApp } from "../../AppContext";
import logo from "../../assets/logo.png"
import Header from "../header/Header";
import { FiArrowRightCircle } from "react-icons/fi";

const Navbar = () => {

  const { dataUser, setDataUser } = useContext(ContextApp);

  const handleLogout = () => {
    localStorage.removeItem('userConnected');
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

          {
            dataUser ? <div className="sizeHot" style={{ display: "flex", alignItems: "center", gap: ".5rem", flexDirection: "column" }}>
              <span style={{ fontWeight: "bold", color:"#fff", border:"1px solid silver", padding:".4rem 1rem", marginTop:"1rem", borderRadius:"4px" }}>{`Salut ${dataUser && dataUser.pseudo}`}</span>
              <br />
              <button className="btnDeconnexion" onClick={() => handleLogout()}>Déconnexion</button>
            </div> : <li className="btnIbnscr">
              <Link
                to="/signin"
                className="btnInscrisToi"
              >
                <div>Connectez-vous</div>
                <FiArrowRightCircle size={20} />
              </Link>
            </li>
          }

        </ul>

        {
          dataUser ? <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
            <span style={{ fontWeight: "bold" }} className="nomNoneDisplay">{`Salut ${dataUser && dataUser.pseudo}`}</span>
            <br />
            <button className="btnInscrisToi" onClick={() => handleLogout()}>Déconnexion</button>
          </div> :
            <Link
              to="/signin"
              className="btnInscrisToi"
            >
              <div>Connectez-vous</div>
              <FiArrowRightCircle size={20} />
            </Link>
        }

        <div id='icons' onClick={() => displayMenu()}></div>
      </nav>
    </>
  );
};

export default Navbar;
