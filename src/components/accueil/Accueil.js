import React from 'react'
import "./Accueil.css"
import { FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';

const Accueil = () => {

    const choiceTypeCommande = () => {
        swal({
            title: "On veut accéder à votre position",
            text: "Voulez-vous qu'on accède à votre position ?",
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    window.location = "/commander-une-course"
                } else {
                    window.location = "/commander-une-course"
                }
            });
    };

    return (
        <div className='accueil'>
            <div className='overPlay'></div>
            <div className='text'>
                <p>Avec nous, Déplacez-vous autrement.</p>
                <span>Nous offrons des services de transport dans divers secteurs.</span>
                <button>
                    <Link style={{ color: "#fff", textDecoration: "none" }} to="/" onClick={choiceTypeCommande}>Commander</Link>
                    <FiChevronRight />
                </button>
            </div>
        </div>
    )
}

export default Accueil