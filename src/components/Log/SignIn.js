import React from 'react'
import "./SignIn.css"
import AUTH from "../../assets/auth.svg"
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div className='log'>
            <div className='form'>
                <div className='col-sm-6'>
                    <img src={AUTH} alt="Auth" />
                </div>
                <div className='col-sm-6'>
                    <form>
                        <div className='iconsText'>
                            <span>Connectez-vous</span>
                            <div className='icons'>
                                <FaFacebook color='#00B0FF' />
                                <FaGoogle color='#ce9900' />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse email</label>
                            <input type="email" className="form-control" id="email" placeholder="Entrer une adresse email valide" />
                        </div>
                        <div class="form-group mt-2">
                            <label for="exampleInputPassword1">Mot de passe</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Se connecter
                        </button>

                        <div className='signup'>
                            <span className='one'>Pas encore de compte ?</span>
                            <br />
                            <span className='deux'>
                                <Link to="/signup">Créer un compte</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn