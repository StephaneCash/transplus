import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="iconsAndText">
                <span className="suivezNousText">Suivez-nous sur</span>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaLinkedin />
            </div>
            <div className="adresseEntre">
                Bumba 19, Limete Salongo, Kinshasa
            </div>
        </div>
    )
}

export default Header