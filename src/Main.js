import React from 'react'
import Developper from './components/developper/Developper';
import Securiter from './components/securiser/Securiter';
import Accompagner from './components/accompagner/Accompagner';
import Technologie from './components/techno/Technologie';
import Accueil from './components/accueil/Accueil';
import Navbar from "./components/navbar/Navbar"
import Produit from "./components/produits/Produit"
import Partenaires from "./components/partenaires/Partenaires"

const Main = () => {
    return (
        <>
            <Navbar />
            <Accueil />
            <Developper />
            <Securiter />
            <Accompagner />
            <Technologie />
            <Produit />
            <Partenaires />
        </>
    )
}

export default Main