import React from "react";
import "./Technologie.css";

const Technologie = () => {
  return (
    <section id="techno">
      <h1>Ils nous font confiance</h1>
      <div className="container techno">
        <div className="grille">
          <div className="card">
            <img src="./pullup.jpeg" alt="pullUp" />
          </div>
          <div className="card">
            <img src="./code.jpeg" alt="EmpireCode" />
          </div>
          <div className="card">
            <img src="./fec.jpg" alt="Fec" />
          </div>
          <div className="card">
            <img src="./manitech.png" alt="Manitech" />
          </div>
          <div className="card">
            <img src="./btech.jpg" alt="Btech" />
          </div>
          <div className="card">
            <img src="./lagrinta.jpg" alt="lagrinta" />
          </div>
          <div className="card">
            <img src="./green.jpg" alt="Green Energy" />
          </div>
          <div className="card">
            <img src="./chips.jpg" alt="Chips" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologie;
