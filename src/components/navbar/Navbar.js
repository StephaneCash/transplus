import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.JPG";
import { ContextApp } from "../../AppContext";
import { FaList } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Navbar = () => {

  const { dataUser, setDataUser } = useContext(ContextApp);

  const [showLinks, setShowLinks] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setDataUser(null);
  };

  const showLinksHandle = () => {
    setShowLinks(!showLinks)
  }

  const hideBtn = () => {
    setShowLinks(false)
  }

  let width = window.innerWidth;
  //console.log(dataUser)

  return (
    <nav id="navbar">
      <div className="navBar">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="Logo" />
            <span> TRANSPLUS </span>
          </div>
        </Link>
        {
          !showLinks ? <FaList size={26} color="#ddd" onClick={showLinksHandle} style={{ cursor: "pointer" }} /> :
            <FiX size={26} color="#ddd" onClick={showLinksHandle} style={{ cursor: "pointer" }} />
        }

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
      </div>
      <div className={showLinks ? "show" : "navBarVirtuel"}>
        <ul>
          <li>
            {
              dataUser && dataUser.status === 200 ?
                <>
                  <Link to="" style={{
                    color: 'silver'
                  }}>

                    {
                      dataUser && dataUser.data && dataUser.data.data && " Salut " + dataUser.data.data.pseudo
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
                    className="btnSignUp"
                    onClick={hideBtn}
                  >
                    {" "}

                    <span> {dataUser === null && "S 'inscrire"}</span>

                  </Link>{" "}
                </>

            }
          </li>{" "}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
