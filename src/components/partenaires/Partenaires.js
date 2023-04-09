import React from 'react'
import "./Partenaire.css"

const Partenaires = () => {
  const date = new Date().getFullYear();
  return (
    <section id="partenaire">
      <div className='container partenaire'>
        &copy; Munie Group {date} tous droits réservés - Mentions légales
        - Politique de confidentialité - cgu -  Politique de Cookies
      </div>
    </section>
  )
}

export default Partenaires