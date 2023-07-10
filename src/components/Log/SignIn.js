import React, { useState } from 'react'
import "./SignIn.css"
import AUTH from "../../assets/auth.svg"
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { baseUrl } from '../../bases/bases'
import { useContext } from 'react'
import { ContextApp } from '../../AppContext'
import Loader from '../loader/Loader'

const SignIn = ({ setIsActive }) => {

    const { setUserConnected } = useContext(ContextApp);

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    const [btnClic, setBtnClic] = useState(false);

    const handleAuth = (event) => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        setBtnClic(true);
        event.preventDefault();
        setIsActive(true);
        if (email && pwd) {
            if (email.match(pattern)) {
                axios.post(`${baseUrl}/users/authentification`, {
                    email: email,
                    password: pwd
                })
                    .then(res => {
                        if (res.status === 200) {
                            toast.success('Authentification réussie avec succès');
                            setBtnClic(true);
                            setUserConnected(res.data);
                            localStorage.setItem('user', JSON.stringify(res.data));
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error(err && err.response && err.response.data && err.response.data.message);
                        setBtnClic(false);
                    })

            } else {
                toast.error("Votre adresse email n'est pas valide.");
                setIsActive(false);
                setBtnClic(false);
            }
        } else {
            toast.error("Veuillez remplir tous les champs svp.");
            setIsActive(false);
            setBtnClic(false);
        }
    };

    return (
        <div className='log'>
            <div className='form signin'>
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
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Entrer une adresse email valide"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputPassword1">Mot de passe</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                                onChange={(e) => setPwd(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={handleAuth}
                        >
                            {
                                btnClic ? <Loader /> : "Se connecter"
                            }
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