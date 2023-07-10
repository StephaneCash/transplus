import React from 'react'
import "./Domaine.css"
import logo from "../../assets/app.jpg"

const Domaine = () => {
    return (
        <section id="domaine">
            <div className='container domaine'>
                <h1>A propos de nous</h1>
                <div className='data'>
                    <div className='col-sm-6'>
                        <img src={logo} alt="Photo_about" />
                    </div>
                    <div className='col-sm-6'>
                        <h6>La plus grande entreprise de transport en RDC avec une qualité de services très avancée</h6>
                        <p className='content'>
                            Transplus est une branche de Munie Group (entreprise multi secteurs) qui met à la disposition
                            du peuple congolais en particulier Kinois, la manière la plus simple de commmander vos courses en toute sécurité
                            à tout moment et depuis n'importe où.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Domaine