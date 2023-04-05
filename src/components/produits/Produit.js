import React from 'react'
import "./Produit.css"
import { FaEnvelopeOpenText } from 'react-icons/fa'

const Produit = () => {
    return (
        <section id="produit">
            <div className='head'>
                <h1>Soyez informé</h1>
                <FaEnvelopeOpenText size={50} />
            </div>
            <div className='container produit'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <button className='btn btn-success'>Soumettre</button>
            </div>
        </section>
    )
}

export default Produit