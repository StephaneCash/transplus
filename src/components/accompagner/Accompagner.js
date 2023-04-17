import React from 'react'
import "./Accompagner.css"
import collaboration from "../../assets/collaboration.svg"
import security from "../../assets/security.svg"
import dispo from "../../assets/dispo.svg"
import { Link } from 'react-router-dom'

const Accompagner = () => {
    return (
        <section id="accompagner">
            <div className='container accompagner'>
                <h1>Fiers d'offrir l'excellence à chaque fois</h1>
                <div className='grille'>
                    <div className="card">
                        <div className="imgBx">
                            <img src={collaboration} alt="P1" />
                        </div>
                        <div className="contentBx">
                            <h2>Collaboration</h2>
                            <div className="size">
                                <h3>COTE :</h3>
                                <span>1</span>
                                <span>0</span>
                                <span>0</span>
                                <span>%</span>
                            </div>
                            <div className="color">
                                <h3>Succès :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <Link to="/collaboration">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img src={security} alt="P1" />
                        </div>
                        <div className="contentBx">
                            <h2>Sécurité</h2>
                            <div className="size">
                                <h3>COTE :</h3>
                                <span>1</span>
                                <span>0</span>
                                <span>0</span>
                                <span>%</span>
                            </div>
                            <div className="color">
                                <h3>Succès :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <Link to="/security">En savoir plus</Link>
                        </div>
                    </div>
                    <div className="card">
                        <div class="imgBx">
                            <img src={dispo} alt="P1" />
                        </div>
                        <div className="contentBx">
                            <h2>Disponibilité</h2>
                            <div className="size">
                                <h3>Succès :</h3>
                                <span>1</span>
                                <span>0</span>
                                <span>0</span>
                                <span>%</span>
                            </div>
                            <div className="color">
                                <h3>Succès :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <Link to="/disponibility">En savoir plus</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accompagner