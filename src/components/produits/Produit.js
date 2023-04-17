import React from 'react'
import "./Produit.css"
import { FaArrowRight, FaChevronCircleUp, FaChevronRight, FaEnvelope, FaEnvelopeOpenText, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneVolume, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Produit = () => {

    const hanldeScrollTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <section id="produit">
            <div className='head'>
                <h1>Joindre notre Newletter</h1>
                <FaEnvelopeOpenText size={25} />
            </div>
            <div className='container produit'>
                <div class="form-group">
                    <input type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Enter email" />
                    <button className='btn btn-success'>Soumettre</button>
                </div>
                <div className='footer1'>
                    <ul>
                        <li>  Services</li>
                        <li><FaChevronRight /> Commande de courses</li>
                        <li><FaChevronRight /> Prêts de motos par contrat</li>
                        <li><FaChevronRight /> Livraison de produits</li>
                        <li><FaChevronRight /> Formations</li>
                        <li> <FaChevronRight />Offre d'emploi</li>
                    </ul>

                    <ul>
                        <li>Voulez-vous une course ?</li>
                        <li className='active'>
                            <Link to='/commander-une-course'>
                                <FaArrowRight />   Commander votre course
                            </Link>
                        </li>
                        <li className='active'>
                            <FaArrowRight />  Découvrir nos offres
                        </li>
                    </ul>

                    <ul>
                        <li>Liens</li>
                        <li><FaChevronRight />Accueil</li>
                        <li><FaChevronRight />A propos</li>
                        <li><FaChevronRight />Nos Services</li>
                        <li><FaChevronRight />Offres</li>
                        <li><FaChevronRight />Confiance</li>
                    </ul>

                    <ul>
                        <li>Contact</li>
                        <li>
                            <FaEnvelope /> <span>transplus@gmail.com</span>
                        </li>
                        <li>
                            <FaPhoneVolume /> <span>+243 8255226625</span>
                        </li>
                        <li>
                            <FaMapMarkerAlt /> Kinshasa, Av. Matshumu 16, Debonhomme
                        </li>
                        <li className='reseauxSociaux'>
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </li>
                    </ul>
                </div>

                <div className='chevron'>
                    <FaChevronCircleUp size={50} onClick={hanldeScrollTop} />
                </div>
            </div>
        </section>
    )
}

export default Produit