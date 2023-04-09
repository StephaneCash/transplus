import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.JPG";

const Navbar = () => {
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
            S 'inscrire
          </Link>{" "}
        </li>{" "}
      </ul>
    </nav>
  );
};

export default Navbar;
