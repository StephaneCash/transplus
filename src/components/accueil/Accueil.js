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
                    <h1>Munie Group, entreprise multi-secteurs</h1>

                    <p>
                        Nous sommes une Entreprise Multi services proposant dans des domaines innovants de solutions simples de qualité. <br />
                        Nous évoluons dans le transport, la nouvelle technologie, la construction métallique, l'Agro Alimentaire et l'Elévage.
                    </p>

                    <div className='btnDec'>
                        <a href="#decouvrir" className='dec'>
                            Découvrir
                        </a>
                        <Link to="commander-une-course" className='com'>
                            Commander une course <FaMotorcycle size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accueil