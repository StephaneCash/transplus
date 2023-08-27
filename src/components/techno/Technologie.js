import React from "react";
import "./Technologie.css";

const Technologie = () => {
  return (
    <section id="techno">
      <h1>Ils nous font confiance</h1>
      <div className="container techno">
        <div className="grille">
          <div className="card">
            <img src="./pullup.jpg" alt="pullUp" />
          </div>
          <div className="card">
            <img src="./geek.jpg" alt="EmpireCode" />
          </div>
          <div className="card">
            <img src="./cnrem.jpg" alt="Fec" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologie;
