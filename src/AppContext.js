import React, { createContext, useEffect, useState } from 'react';
import App from './App';
import axios from 'axios';
import { baseUrl } from './bases/bases';

export const ContextApp = createContext();

const AppContext = () => {

    const [userConnected, setUserConnected] = useState(null);
    const [dataUser, setDataUser] = useState(null);

    const user = localStorage.getItem('user');
    const dataParse = JSON.parse(user)
    const id = dataParse && dataParse.id

    console.log(dataParse, " ID")

    useEffect(() => {
        if (id) {
            axios.get(`${baseUrl}/users/${id}`)
                .then(res => {
                    setDataUser(res)
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }, [id]);

    return (
        <ContextApp.Provider
            value={{
                userConnected, setUserConnected, dataUser, setDataUser
            }}
        >
            <App />
        </ContextApp.Provider>
    )
}

export default AppContext