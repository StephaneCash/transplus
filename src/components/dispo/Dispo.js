import React, { useEffect } from 'react'
import "./Dispo.css";
import { Link } from 'react-router-dom';
import { FaAngleRight, FaHome } from 'react-icons/fa';
import dispo1 from "../../assets/dispo1.png"
import dispo2 from "../../assets/dispo2.png"

const Dispo = () => {

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
                <span>Disponibilité </span>
            </div>

            <div className='collaboration'>
                <img src={dispo1} alt='Collaboration' />

                <div className='text'>
                    <h4>Notre souci pour nos clients</h4>
                    <p>
                        Nous roulons sur les motos les plus chères du marché parce qu’un taxi moto à RDC se doit d'être confortable. Nous répondons à toutes vos questions sur les taxis motos depuis un centre d'appel de Munie group .
                    </p>
                    <p>
                        En tant qu’experts du transport de professionnels, nous fournissons un équipement complet, onéreux et toujours renouvelé à nos chauffeurs.
                        <br /><br />
                        Ce choix d’un service de qualité fait de nous les leaders du taxi moto à Kinshasa et nous pouvons proposer la meilleure qualité de service au même prix que
                        nos concurrents grâce à un volume de commandes supérieur.
                    </p>
                </div>
            </div>
            <div className='collaboration' style={{ backgroundColor: "#ddd" }}>
                <div className='text'>
                    <h4>Notre stratégie</h4>
                    <p>
                        Nous roulons sur les motos les plus chères du marché parce qu’un taxi moto à RDC se doit d'être confortable. Nous répondons à toutes vos questions sur les taxis motos depuis un centre d'appel de Munie group .
                    </p>
                    <p>
                        En tant qu’experts du transport de professionnels, nous fournissons un équipement complet, onéreux et toujours renouvelé à nos chauffeurs.
                        <br /><br />
                        Ce choix d’un service de qualité fait de nous les leaders du taxi moto à Kinshasa et nous pouvons proposer la meilleure qualité de service au même prix que
                        nos concurrents grâce à un volume de commandes supérieur.
                    </p>
                </div>

                <img src={dispo2} alt='Collaboration' />
            </div>
        </>
    )
}

export default Dispo
