import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ContextApp } from "../../AppContext";
import { FaArrowCircleRight, FaFacebook, FaInstagram, FaLinkedin, FaPlus, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png"

const Navbar = () => {

  const { dataUser, setDataUser } = useContext(ContextApp);

  const [showLinks, setShowLinks] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setDataUser(null);
  };

  return (
    <>

      <div className="header">
        <div className="iconsAndText">
          <span>Suivez-nous sur</span>
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
      <nav id="navbar">
        <div className="navBar">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <span> TRANSPLUS </span>
            </div>
          </Link>

          <ul>
            <li>
              {
                dataUser && dataUser.status === 200 ?
                  <>
                    <Link to="" style={{
                      color: 'silver'
                    }}>

                      {
                        dataUser && dataUser.data && dataUser.data && " Salut " + dataUser.data.pseudo
                      }
                    </Link>
                    <Link
                      to="/commander-une-course"
                      style={{
                        background: "silver",
                        padding: "10px",
                        color: "black",
                        borderRadius: "5px",
                      }}
                    >
                      {" "}
                      {
                        dataUser && dataUser.status === 200 ? <span onClick={handleLogout}>Déconnexion</span> : " S 'inscrire"
                      }

                    </Link>{" "}
                  </> :
                  <>
                    <Link to="#domaine" className="item">  A propos <FaPlus /> </Link>
                    <Link to="#d" className="item"> Nos services <FaPlus />  </Link>
                    <Link to="#d" className="item"> Nos solutions <FaPlus />  </Link>
                    <Link to="#d" className="item"> Nos offres d 'emploi <FaPlus /> </Link>
                    <Link to="#d" className="item"> Confiance <FaPlus />  </Link>
                    <Link to="#d" className="item"> Partenaires  <FaPlus /> </Link>
                    <Link
                      to="/signup"
                      className="btnInscrisToi"
                    >
                      Inscris-toi
                      <FaArrowCircleRight />
                    </Link>
                  </>

              }
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
