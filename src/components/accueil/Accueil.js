import React from 'react'
import "./Accueil.css"
import { Link } from 'react-router-dom'
import app from "../../assets/appM.png"
import { FaPlay } from 'react-icons/fa'

const Accueil = () => {
    return (
        <section id="accueil">
            <div className='accueil'>
                <div className='text'>
                    <h1>Transplus, déplacez-vous <span>autrement</span> et en toute <span> sécurité</span> </h1>

                    <div className='d-flex'>
                        <div className='col-sm-1'>
                            <FaPlay />
                        </div>
                        <div className='col-sm-10'>Franche collaboration</div>
                    </div>
                    <div className='d-flex'>
                        <div className='col-sm-1'>
                            <FaPlay />
                        </div>
                        <div className='col-sm-10'>Sécurité assurée</div>
                    </div>
                    <div className='d-flex'>
                        <div className='col-sm-1'>
                            <FaPlay />
                        </div>
                        <div className='col-sm-10'>24/7 Disponibilité</div>
                    </div>
                    <div className='d-flex'>
                        <div className='col-sm-1'>
                            <FaPlay />
                        </div>
                        <div className='col-sm-10'>Réservations illimitées</div>
                    </div>

                    <div className='btnDec mt-4'>
                        <Link to="commander-une-course" className='com'>
                            Commander
                        </Link>
                    </div>
                </div>

                <img src={app} alt="" />
            </div>
        </section>
    )
}

export default Accueil