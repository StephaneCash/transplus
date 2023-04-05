import React from 'react'
import "./Accompagner.css"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"

const Accompagner = () => {
    return (
        <section id="accompagner">
            <div className='container accompagner'>
                <h1>Fiers d'offrir l'excellence à chaque fois</h1>
                <div className='grille'>
                    <div class="card">
                        <div class="imgBx">
                            <img src={p1} alt="P1" />
                        </div>
                        <div class="contentBx">
                            <h2>Collaboration</h2>
                            <div class="size">
                                <h3>COTE :</h3>
                                <span>1</span>
                                <span>0</span>
                                <span>0</span>
                                <span>%</span>
                            </div>
                            <div class="color">
                                <h3>Succès :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#">En savoir plus</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={p2} alt="P1" />
                        </div>
                        <div class="contentBx">
                            <h2>Sécurité</h2>
                            <div class="size">
                                <h3>COTE :</h3>
                                <span>1</span>
                                <span>0</span>
                                <span>0</span>
                                <span>%</span>
                            </div>
                            <div class="color">
                                <h3>Succès :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#">En savoir plus</a>
                        </div>
                    </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={p3} alt="P1" />
                        </div>
                        <div class="contentBx">
                            <h2>Disponibilité</h2>
                            <div class="size">
                                <h3>Succès :</h3>
                                <span>1</span>
                                <span>0</span>
                                <span>0</span>
                                <span>%</span>
                            </div>
                            <div class="color">
                                <h3>Succès :</h3>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <a href="#">En savoir plus</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accompagner