import React from 'react'
import "./Domaine.css"
import about from '../../assets/about.png'
import { FaCheckCircle } from "react-icons/fa"

const Domaine = () => {
    return (
        <section id="domaine">
            <div className='container domaine'>
                <h1>A propos de nous</h1>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={about} alt="Photo_about" />
                    </div>
                    <div className='col-sm-6'>
                        <h6>La plus grande entreprise mondiale avec une qualité de services très avancée.</h6>
                        <p>
                            Une entreprise de transport de marchandises a pour objet social le transport de marchandises par le réseau routier. On distingue le transport routier poids lourd (utilisation de véhicules de plus de 3.5 tonnes),
                            du transport léger de marchandises (utilisation de véhicules de moins de 3.5 tonnes). <br />
                        </p>
                        <div className='mt-5'>
                            <div className='row'>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle /> <i className='fa fa-user'></i>  <a href="">Révisions illimitées</a>
                                </div>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle /> <a href="">Bonnes fonctionnalités</a>
                                </div>
                            </div>

                            <div className='row mt-2'>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle />  <a href="">Meilleurs solutions</a>
                                </div>
                                <div className='col-sm-6 link'>
                                    <FaCheckCircle /> <a href="">24/7 Services</a>
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