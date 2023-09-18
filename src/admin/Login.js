import React, { useState } from 'react';
import "./Login.css";
import axios from 'axios';
import { baseUrl } from '../bases/bases';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [clic, setClic] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setClic(true)
        try {
            const { data } = await axios.post(`${baseUrl}/users/signIn`, {
                email: email,
                password: password
            });
            console.log(data)
            toast.success(data && data.message);
            localStorage.setItem('userDriving', JSON.stringify(data && data.data));
            window.location = "/admin";
            setClic(false)
        } catch (error) {
            console.log(error)
            setClic(false)
            toast.error(error && error.response && error.response.data && error.response.data.message)
        }
    }

    return (
        <div className='loginAuth'>
            <form onSubmit={(e) => handleSubmit(e)}>
                <h1>Authentification</h1>
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
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" disabled={clic ? true : false} className="btn btn-primary mt-2">
                    {
                        clic ? "Connexion..." : "Se connecter"
                    }
                </button>
                <br />

                <Link to="/admin/register">
                    S'inscrire
                </Link>
            </form>

        </div>
    )
}

export default Login