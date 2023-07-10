import React, { useState } from 'react'
import "./Produit.css"
import { FiMail, FiFacebook, FiTwitter, FiInstagram, FiPhone } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaStreetView } from 'react-icons/fa';

const Produit = () => {

    const [email, setEmail] = useState("");
    const [btnClic, setBtnClic] = useState(false);

    const submitEmail = () => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        setBtnClic(true);
        if (email) {
            setBtnClic(false);
            if (email.match(pattern)) {
                setBtnClic(false);
                toast.success("Merci pour votre suscription. " + email);
                setEmail("");
            } else {
                toast.error("Veuillez entrer une adresse email valide svp.")
            }
        } else {
            toast.error("Veuillez entrer une adresse email svp.");
            setBtnClic(false);
        }
    }

    return (
        <section id="produit">
            <div className='container produit'>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Entrer une adresse email svp"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button className='btn' onClick={submitEmail} style={{ border: "1px solid silver" }}>
                        {
                            btnClic ? "Sumission..." : "Soumettre"
                        }
                    </button>
                </div>
                <div className='footer1'>
                    <ul>
                        <li>  Services</li>
                        <li> Commande de courses</li>
                        <li> Prêts de motos par contrat</li>
                        <li> Livraison de produits</li>
                        <li> Formations</li>
                        <li> Offre d'emploi</li>
                    </ul>

                    <ul>
                        <li>Voulez-vous une course ?</li>
                        <li className='active'>
                            <Link to='/commander-une-course'>
                                Commander votre course
                            </Link>
                        </li>
                        <li className='active'>
                            Découvrir nos offres
                        </li>
                    </ul>

                    <ul>
                        <li>Liens</li>
                        <li>Accueil</li>
                        <li>A propos</li>
                        <li>Nos Services</li>
                        <li>Offres</li>
                        <li>Confiance</li>
                    </ul>

                    <ul>
                        <li>Contact</li>
                        <li>
                            <FiMail /> <span>transplus@gmail.com</span>
                        </li>
                        <li>
                            <FiPhone /> <span>+243 82 21 04 658</span>
                        </li>
                        <li>
                            <FaStreetView /> Kinshasa, Debonhomme
                        </li>
                        <li className='reseauxSociaux'>
                            <FiInstagram />
                            <FiFacebook />
                            <FiTwitter />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Produit