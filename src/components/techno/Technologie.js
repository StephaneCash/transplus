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
            <img src="./code.jpg" alt="EmpireCode" />
          </div>
          <div className="card">
            <img src="./fec.jpg" alt="Fec" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologie;
