import React, { useEffect } from 'react';
import "./Collaboration.css";
import colla1 from "../../assets/colla1.png"
import colla2 from "../../assets/colla2.jpg"
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Collaboration = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <section id="sec1Col">
                <div className='overPlay'></div>
                <div className='icons-text'><Link style={{ borderBottom: "1px solid #fff", color: "#fff" }} to="/"><FaHome /></Link>/<span>Collaboration</span></div>
            </section>
            <section id="collaboration">
                <div className='collaboration container'>
                    <div className='d-flex dFlex'>
                        <div className='col-sm-6'>
                            <img src={colla1} alt='Collaboration' />
                        </div>
                        <div className='col-sm-6 text'>
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
                </div>
            </section>

            <section id="collaboration1">
                <div className='collaboration1 container'>
                    <div className='d-flex dFlex'>
                        <div className='col-sm-6 text'>
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

                        <div className='col-sm-6 image'>
                            <img src={colla2} alt='Collaboration' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collaboration;
