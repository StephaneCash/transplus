import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.JPG";
import { ContextApp } from "../../AppContext";

const Navbar = () => {

  const { dataUser, setDataUser } = useContext(ContextApp);

  const [showBtnInscrire, setShowBtnInscrire] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setDataUser(null);
  };

  return (
    <nav id="navbar">
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
                <a style={{
                  color: 'silver'
                }}>

                  {
                    dataUser && dataUser.data && dataUser.data.data && " Salut " + dataUser.data.data.pseudo
                  }
                </a>
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
                <a href="#domaine"> A Propos </a>
                <a href="#d"> Nos services </a>
                <a href="#d"> Nos solutions </a>
                <a href="#d"> Nos offres d 'emploi</a>
                <a href="#d"> Confiance </a>
                <a href="#d"> Partenaires </a>
                <Link
                  to="/signup"
                  style={{
                    background: "silver",
                    padding: "10px",
                    color: "black",
                    borderRadius: "5px",
                  }}
                >
                  {" "}

                  <span> {dataUser === null && "S 'inscrire"}</span>

                </Link>{" "}
              </>

          }
        </li>{" "}
      </ul>
    </nav>
  );
};

export default Navbar;
