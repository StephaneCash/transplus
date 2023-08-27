import React from 'react'
import './Developper.css'
import iconCommade from "../../assets/iconCommade.png";
import iconLivraison from "../../assets/iconLivraison.png"
import pretMoto from "../../assets/pretMoto.png"
import iconFormation from "../../assets/iconFormation.png"

const Developper = () => {
    return (
        <div className='developper'>
            <h1>Nos services</h1>
            <div className='grille'>
                <div className='card'>
                    <img src={iconCommade} alt="" />
                    <span>Commande de courses</span>
                </div>

                <div className='card'>
                    <img src={iconLivraison} alt="" />
                    <span>Livraison</span>
                </div>

                <div className='card'>
                    <img src={iconFormation} alt="" />
                    <span>Formations</span>
                </div>

                <div className='card'>
                    <img src={pretMoto} alt="" />
                    <span>Prêts de motos</span>
                </div>
            </div>
        </div>
    )
}

export default Developper