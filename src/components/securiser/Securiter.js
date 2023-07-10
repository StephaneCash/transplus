import React from 'react'
import './Securite.css'
import JOB from "../../assets/offres.jpg"
import { FaArrowRight } from 'react-icons/fa'

const Securiter = () => {
    return (
        <section id="securite">
            <div className='securite'>
                <div className='data'>
                    <div className='image'>
                        <img src={JOB} alt="Jobs" />
                    </div>

                    <div className='text'>
                        <h4>Nos offres</h4>
                        <p>
                            Processus incontournable de la vie de l'entreprise, le recrutement correspond à l'ensemble des actions mises en œuvre pour trouver le candidat qui correspond aux exigences de compétences (savoirs, savoir-faire et savoir-être) et de qualifications (diplômes et titres) requises pour un poste donné.
                            <br />
                            Consultez nos 28 offres d'emploi Entreprise en RD Congo en CDI ou CDD publiées sur Optioncarriere. Tous les postes à pourvoir en une seule recherche.
                        </p>
                        <div>
                            <button>Découvrir <FaArrowRight /></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Securiter