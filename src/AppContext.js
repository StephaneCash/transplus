import React, { createContext, useEffect, useState } from 'react';
import App from './App';
import axios from 'axios';
import { baseUrl } from './bases/bases';

import { decodeToken } from 'react-jwt';

export const ContextApp = createContext();

const AppContext = () => {

    const [userConnected, setUserConnected] = useState(null);
    const [dataUser, setDataUser] = useState(null);

    const [val, setVal] = useState(null);

    const user = localStorage.getItem('userConnected');
    const dataParse = JSON.parse(user)
    const userParse = decodeToken(dataParse);
    const id = userParse && userParse.id;

    useEffect(() => {
        if (userParse) {
            axios.get(`${baseUrl}/users/${id && id}`)
                .then(res => {
                    setDataUser(res && res.data && res.data.data);
                })
                .catch(err => {
                    console.log(err)
                });
        }
    }, [id]);

    return (
        <ContextApp.Provider
            value={{
                userConnected, setUserConnected, dataUser, setDataUser, setVal, val
            }}
        >
            <App />
        </ContextApp.Provider>
    )
}

export default AppContext