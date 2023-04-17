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
            <div className="card-body">
              pullUp
            </div>
          </div>
          <div className="card">
            <img src="./code.jpeg" alt="EmpireCode" />
            <div className="card-body">
              Empire Code
            </div>
          </div>
          <div className="card">
            <img src="./fec.jpg" alt="Fec" />
            <div className="card-body">
              Fec
            </div>
          </div>
          <div className="card">
            <img src="./manitech.png" alt="Manitech" />
            <div className="card-body">Mani Tech</div>
          </div>
          <div className="card">
            <img src="./btech.jpg" alt="Btech" />
            <div className="card-body">
              B-Tech
            </div>
          </div>
          <div className="card">
            <img src="./lagrinta.jpg" alt="lagrinta" />
            <div className="card-body">La Grinta</div>
          </div>
          <div className="card">
            <img src="./green.jpg" alt="Green Energy" />
            <div className="card-body">Green Energy</div>
          </div>
          <div className="card">
            <img src="./chips.jpg" alt="Chips" />
            <div className="card-body">
              Chips
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologie;
