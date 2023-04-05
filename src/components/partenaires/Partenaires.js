import React from 'react'
import "./Partenaire.css"

const Partenaires = () => {
  const date = new Date().getFullYear();
  return (
    <section id="partenaire">
      <div className='container partenaire'>
        Créé par Munie Group {date}
      </div>
    </section>
  )
}

export default Partenaires