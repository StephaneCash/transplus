import React from 'react'
import './Developper.css'
import moto from "../../assets/app.jpg"
import moto1 from "../../assets/accueil.jpg"
import DELIVRE from "../../assets/delivre.svg"
import FORMATION from "../../assets/dispo1.png"
import { Link } from 'react-router-dom'

const Developper = () => {

    return (
        <section id="developper">
            <h1>Nos services</h1>
            <div className='container developper'>
                <div className='grille'>
                    <div className='card'>
                        <img src={moto1} alt="Taxi" />
                        <div className='card-body'>
                            <h4>Commande de courses</h4>
                            Voulez-vous vous déplacez en toute sécurité ? <br />
                            Oui, nous sommes votre solution.
                            Commander votre course depuis n'importe où et profiter de votre demande
                            de manière la plus simple.
                            <div className=''>
                                <button>
                                    <Link to="/commander-une-course">Commander une course</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={moto} alt="Taxi" />
                        <div className='card-body'>
                            <h4> Prêt des motos par contrat</h4>
                            Réaliser votre rêve en vous offrant une moto de qualité de votre choix en sollicitant un prêt chez nous.
                            Nous répondons aux souhaits de tout le monde sans exception. <br /> Profiter de nos services.
                            <div>
                                <button>Solliciter un prêt</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={DELIVRE} alt="Taxi" />
                        <div className='card-body'>
                            <h4>Livrer vos produits avec nous</h4>
                            Livrez vos produits légalement au moment voulu à n'importe où et en toute sécurité.
                            Notre priorité c'est votre bonheur.
                            <div>
                                <button>Commencer votre livraison</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={FORMATION} alt="Taxi" />
                        <div className='card-body'>
                            <h4>Formez-vous dans le domaine de transport avec des formations de très bonne qualité</h4>
                            Soyez ce que vous avez toujours rêvé en souscriant à l'une ou plusieurs de nos
                            formations, transmises par de professeurs compétents dans le domaine.
                            <div className=''>
                                <button>Formez-vous</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Developper