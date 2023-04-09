import React from 'react'
import Developper from './components/developper/Developper';
import Securiter from './components/securiser/Securiter';
import Accompagner from './components/accompagner/Accompagner';
import Produit from './components/produits/Produit';
import Technologie from './components/techno/Technologie';
import Accueil from './components/accueil/Accueil';
import Domaine from './components/domaines/Domaine';

const Main = () => {
    return (
        <>
            <Accueil />
            <Domaine />
            <Developper />
            <Securiter />
            <Accompagner />
            <Technologie />
            <Produit />
        </>
    )
}

export default Main