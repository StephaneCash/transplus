import React from 'react'
import "./Accueil.css"
import { FiChevronRight } from 'react-icons/fi'

const Accueil = () => {
    return (
        <div className='accueil'>
            <div className='overPlay'></div>
            <div className='text'>
                <p>Avec nous, Déplacez-vous autrement.</p>
                <span>Nous offrons des services de transport dans divers secteurs.</span>
                <button>
                    <div>Commander</div>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    )
}

export default Accueil