import React from 'react'
import "./Accompagner.css"
import collaboration from "../../assets/sec.svg"
import security from "../../assets/col.svg"
import dispo from "../../assets/dispo.svg"
import { Link } from 'react-router-dom'

const Accompagner = () => {
    return (
        <section id="accompagner">
            <div className='container accompagner'>
                <h1>Fiers d'offrir l'excellence à chaque fois</h1>
                <div className='grille'>
                    <div className="card">
                        <img src={collaboration} alt="P1" />
                        <div className='card-body'>
                            <h2>Collaboration</h2>
                            <Link to="/collaboration">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={security} alt="P1" />
                        <div className='card-body'>
                            <h2>Sécurité</h2>
                            <Link to="/security">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={dispo} alt="P1" />
                        <div className='card-body'>
                            <h2>Disponibilité</h2>
                            <Link to="/disponibility">En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accompagner