import React from 'react'
import './Developper.css'
import taxi from "../../assets/taxi.png"
import moto from "../../assets/moto.jpg"
import moto1 from "../../assets/moto1.jpg"
import DELIVRE from "../../assets/delivre.svg"
import FORMATION from "../../assets/formation.svg"

const Developper = () => {
    return (
        <section id="developper">
            <h1>Nos services</h1>
            <div className='container developper'>
                <div className='grille'>
                    <div className='card'>
                        <img src={moto1} alt="Taxi" />
                        <div className='overPlay'></div>
                        <div className='card-body'>
                            <h4>Commande de courses</h4>
                            Chez Munie Group, nous nous engageons pour votre sécurité.
                            Nous avons mis en place des mesures pour des courses sécurisées afin que vous puissiez vous déplacer
                            sereinement.
                            <div className=''>
                                <button>Commander une course</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={moto} alt="Taxi" />
                        <div className='overPlay'></div>
                        <div className='card-body'>
                            <h4> Prêt des motos par contrat</h4>

                            Il s'agit tout simplement d'un emprunt remboursable par l'entreprise selon des mensualités fixées à
                            l'avance par l'organisme financier. Bien souvent les crédits adressés aux professionnels sont plus avantageux et moins contraignants que ceux destinés aux particuliers.

                            <div className=''>
                                <button>Commander une course</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={DELIVRE} alt="Taxi" />
                        <div className='overPlay'></div>
                        <div className='card-body'>
                            <h4>Livrer vos produits avec nous</h4>
                            La livraison est le fait d'acheminer un produit d'un acteur à un autre. <br />
                            Il peut s'agir d'une livraison du fournisseur jusqu'aux entrepôts du commerçant, d'une livraison entre le commerçant et le client final,
                            ou d'une livraison directe entre le fournisseur et le consommateur.
                            <div>
                                <button>Commander une course</button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <img src={FORMATION} alt="Taxi" />
                        <div className='overPlay'></div>
                        <div className='card-body'>
                            <h4>Nous offrons des formations de qualités dans le domaine de transport</h4>
                            Action de former, manière dont quelque chose se forme ; processus entraînant l'apparition
                            de quelque chose qui n'existait pas auparavant : La formation d'un abcès. La formation d'une équipe. 2. Développement et
                            modification de l'organisme qui rend l'individu capable d'exercer les fonctions de reproduction.
                            sereinement.
                            <div className=''>
                                <button>Commander une course</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Developper