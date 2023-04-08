import React from "react";
import "./Technologie.css";

const Technologie = () => {
  return (
    <section id="techno">
      <h1>Ils nous font confiance</h1>
      <div className="container techno">
        <div className="grille">
          <div className="card">
            <div className="card-body">
              <img src="./pullup.jpeg" alt="HTML" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src="./code.jpeg" alt="HTML" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src="./fec.jpg" alt="HTML" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src="./manitech.png" alt="HTML" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src="./gitlab.png" alt="GitLab" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src="./jenkins.png" alt="Jenkis" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src="./docker.png" alt="Docker" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src="./iot.png" alt="IOT" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologie;
