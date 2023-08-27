import React from 'react'

import { decodeToken } from 'react-jwt';
import { Outlet, Navigate } from 'react-router-dom';

const RoutesPrivate= () => {
    
    const jwt = JSON.parse(localStorage.getItem('userConnected'));
    const decodedToken = decodeToken(jwt && jwt.jeton);

    return (
        Number.isSafeInteger(decodedToken && decodedToken.id)
            ? <Outlet /> : <Navigate to="/signin" />
    )
}

export default RoutesPrivate;