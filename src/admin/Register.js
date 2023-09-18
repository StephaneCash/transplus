import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { baseUrl } from '../bases/bases';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pseudo, setPeudo] = useState('');
    const [clic, setClic] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClic(true)
        try {
            const { data } = await axios.post(`${baseUrl}/users`, {
                email: email,
                password: password,
                pseudo: pseudo
            });
            setClic(false);
            toast.success(data && data.message);
            navigate("/admin/login")
        } catch (error) {
            console.log(error)
            setClic(false)
            toast.error(error && error.response && error.response.data && error.response.data.message)
        }
    }

    return (
        <div className='loginAuth'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Inscription</h1>
                <div className="form-group">
                    <label htmlFor="nom">Nom</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nom"
                        aria-describedby="nom"
                        placeholder="Enter nom"
                        onChange={(e) => setPeudo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={clic ? true : false} className="btn btn-primary mt-2">
                    {
                        clic ? "Inscription..." : "S'inscrire"
                    }
                </button>
                <br />

                <Link to="/admin/login">
                    Se connecter
                </Link>
            </form>

        </div>
    )
}

export default Register