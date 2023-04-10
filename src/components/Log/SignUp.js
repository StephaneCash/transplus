import React, { useEffect, useState } from 'react'
import "./SignIn.css"
import AUTH from "../../assets/auth.svg"
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import Loader from "../loader/Loader"
import axios from "axios"
import { baseUrl } from '../../bases/bases';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

    const naviagate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [laoding, setLoading] = useState(false);
    const [eye, setEye] = useState(false);

    const handleEmail = (e) => {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let erreur = document.getElementById('err')

        setEmail(e.target.value);
        if (e.target.value !== "") {
            if (e.target.value.match(pattern)) {
                erreur.innerHTML = 'Adresse email  valide';
                erreur.style.color = "green";
                erreur.style.fontSize = "14px";
                erreur.style.fontStyle = "italic";
            } else {
                erreur.innerHTML = 'Adresse email non valide';
                erreur.style.color = "red";
                erreur.style.fontSize = "14px";
                erreur.style.fontStyle = "italic";
            }
        } else {
            erreur.innerHTML = "";
        }
    }

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        if (pwd.length < 6) {
            toast.error('Le mot de passe doit avoir au minimum 6 acarctères');
            setLoading(false);
        } else {
            axios.post(`${baseUrl}/users`, {
                pseudo: username,
                email: email,
                password: pwd
            })
                .then(res => {
                    console.log(res.data)
                    toast.success(res && res.data && res.data.message);
                    setTimeout(() => {
                        naviagate('/commander-une-course')
                    }, 3000);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err.response);
                    setLoading(false);
                    toast.error(err && err.response.data && err.response.data.message);
                });
        }
    };

    const showPassword = () => {
        let pass = document.getElementById('exampleInputPassword1');

        setEye(!eye);
        if (eye) {
            pass.type = "text";
        } else {
            pass.type = "password";
        }
    }

    return (
        <div className='log' style={{ height: "auto", marginTop: "100px", marginBottom: "1rem", height:"700px" }}>
            <div className='form'>
                <div className='col-sm-6'>
                    <img src={AUTH} alt="Auth" />
                </div>
                <div className='col-sm-6'>
                    <form onSubmit={handleSubmit}>
                        <div className='iconsText'>
                            <span>Inscription</span>
                            <div className='icons'>
                                <FaFacebook color='#00B0FF' />
                                <FaGoogle color='#ce9900' />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Votre prénom</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                placeholder="Entrer votre prénom"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email" placeholder="Entrer une adresse email valide"
                                onChange={handleEmail}
                            />
                            <span id="err"></span>
                        </div>
                        <div className="form-group mt-2">
                            <label htmlFor="exampleInputPassword1">Mot de passe</label>
                            <div style={{
                                position: "relative"
                            }}>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={(e) => setPwd(e.target.value)}
                                />
                                {
                                    eye ? <FaEye style={{
                                        position: "absolute",
                                        right: "10px",
                                        top: "15px"
                                    }} onClick={showPassword} /> :
                                        <FaEyeSlash style={{
                                            position: "absolute",
                                            right: "10px",
                                            top: "15px"
                                        }} onClick={showPassword} />
                                }
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            {
                                laoding ? <Loader /> : "Inscription"
                            }
                        </button>

                        <div className='signup'>
                            <span className='one'>Avez-vous un compte ?</span>
                            <br />
                            <span className='deux'>
                                <Link to="/commander-une-course">Connectez-vous</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp