import React, { useEffect } from 'react';
import "./Sec.css";
import { Link } from 'react-router-dom';

import security1 from "../../assets/security1.png"
import clef from "../../assets/clef.png"
import { FaAngleRight, FaHome } from "react-icons/fa";

const Sec = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <div className='pathLink'>
                <Link to="/">
                    <FaHome />
                    <span>Accueil</span>
                </Link>
                <FaAngleRight />
                <span>Sécurité </span>
            </div>
            <div className="collaboration">
                <img src={clef} alt='Collaboration' />
                <div className='text'>
                    <h4>Votre sécurité c'est notre priorité</h4>
                    <p>Des motos taxis pour votre confort et votre sécurité
                        Afin de nous maintenir au plus au niveau en ce qui concerne la qualité de nos services, nous avons choisi de rouler uniquement sur les motos les plus chères du marché.
                        En effet, chez TRANSPLUS, nous pensons qu’un voyage en taxi moto se doit d’être le plus confortable possible pour votre bien-être.
                    </p>
                    <p>
                        Nous vous proposons donc de réserver un pilote de moto taxi qui viendra vous récupérer à bord des nos motos les plus performantes.
                        Ces modèles particulièrement spacieux et confortables vous permettront d’atteindre rapidement votre destination, et en toute sérénité.
                    </p>
                </div>
            </div>

            <div className='collaboration' style={{ background: "#ddd" }}>
                <div className='text'>
                    <h4>Notre stratégie</h4>
                    <p> Vous serez donc installé dans un siège passager chauffant et ergonomique tandis que votre pilote vous conduira, armé de son GPS et avec sa grande maîtrise de la circulation congolaise. Il ne vous restera qu’à vous détendre, écouter la radio , ou encore passer un appel grâce à votre casque.
                        En quelques minutes, vous serez arrivé à bon port grâce à votre chauffeur capable d’éviter les bouchons, même durant les heures de pointe !
                    </p>
                    <p>
                        Enfin, comme votre sécurité ainsi que votre satisfaction nous tiennent particulièrement à cœur,
                        vous pourrez disposer de tout un équipement de sécurité afin de vous protéger de toutes sortes de danger et de vous rassurer.
                    </p>
                </div>

                <img src={security1} alt='Sécurité' />
            </div>
        </>
    )
}

export default Sec
