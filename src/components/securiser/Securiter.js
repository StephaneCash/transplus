import React from 'react'
import './Securite.css'
import JOB from "../../assets/job.svg"
import { FaArrowRight } from 'react-icons/fa'

const Securiter = () => {
    return (
        <section id="securite">
            <div className='container securite'>
                <h1>Nos offres</h1>
                <div className='data'>
                    <div className='col-sm-6'>
                        <h4 className='title'>Nous proposons des offres d'emploi...</h4>
                        <p style={{
                            textAlign:"justify"
                        }}>
                            Processus incontournable de la vie de l'entreprise, le recrutement correspond à l'ensemble des actions mises en œuvre pour trouver le candidat qui correspond aux exigences de compétences (savoirs, savoir-faire et savoir-être) et de qualifications (diplômes et titres) requises pour un poste donné.
                            <br />
                            Consultez nos 28 offres d'emploi Entreprise en RD Congo en CDI ou CDD publiées sur Optioncarriere. Tous les postes à pourvoir en une seule recherche.
                        </p>
                        <div>
                            <button>Découvrir <FaArrowRight /></button>
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <img src={JOB} alt="Jobs" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Securiter