import React from 'react'
import "./Accompagner.css"
import collaboration from "../../assets/form.jpg"
import security from "../../assets/dispoP.jpg"
import dispo from "../../assets/im1.jpg"
import { Link } from 'react-router-dom'

const Accompagner = () => {
    return (
        <section id="accompagner">
            <div className='accompagner'>
                <h1>Fiers d'offrir l'excellence à chaque fois</h1>
                <div className='grille'>
                    <div className="card">
                        <img src={collaboration} alt="P1" />
                        <div className='card-body'>
                            <h2>Collaboration</h2>
                            <p>
                                Collaboration est une priorité pour nous
                            </p>
                            <Link to="/collaboration">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={security} alt="P1" />
                        <div className='card-body'>
                            <h2>Sécurité</h2>
                            <p>Une Sécurité maximale est mise en pratique</p>
                            <Link to="/security">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img src={dispo} alt="P1" />
                        <div className='card-body'>
                            <h2>Disponibilité</h2>
                            <p>Une forte équipe est là pour une franche collaboration</p>
                            <Link to="/disponibility">En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accompagner