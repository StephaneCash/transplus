import React from 'react'
import "./Domaine.css"
import { FaCheckCircle } from "react-icons/fa"
import logo from "../../assets/logo.JPG"

const Domaine = () => {
    return (
        <section id="domaine">
            <div className='container domaine'>
                <h1>A propos de nous</h1>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={logo} alt="Photo_about" />
                    </div>
                    <div className='col-sm-6'>
                        <h6>La plus grande entreprise de transport en RDC avec une qualité de services très avancée</h6>
                        <p>
                            Transplus est une branche de Munie Group (entreprise multi secteurs) qui met à la disposition
                            du peuple congolais en particulier Kinois, la manière la plus simple de commmander vos courses en toute sécurité
                            à tout moment et depuis n'importe où.
                        </p>
                        <div className='mt-5'>
                            <div className='row'>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle /> <a href="">Réservations illimitées</a>
                                </div>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle /> <a href="">Franche collaboration</a>
                                </div>
                            </div>

                            <div className='row mt-2'>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle />  <a href="">Sécurité assurée</a>
                                </div>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle /> <a href="">24/7 Disponibilité</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Domaine