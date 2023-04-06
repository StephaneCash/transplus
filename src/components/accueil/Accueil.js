import React from 'react'
import "./Accueil.css"
import { FaMotorcycle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Accueil = () => {
    return (
        <section id="accueil">
            <div className='overImage'></div>
            <div className='container accueil'>
                <div className='text'>
                    <h1>Transplus, déplacez-vous en toute sécurité</h1>

                    <p>
                        Facilitez vos déplacements sans inquiétude en commandant
                        vos courses chez nous en toute sécurité
                    </p>

                    <div className='btnDec'>
                        <a href="#decouvrir" className='dec'>
                            Découvrir
                        </a>
                        <Link to="commander-une-course" className='com'>
                            Commander une course <FaMotorcycle size={30} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accueil