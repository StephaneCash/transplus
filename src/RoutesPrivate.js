import React from 'react'

import { decodeToken } from 'react-jwt';
import { Outlet, Navigate } from 'react-router-dom';

const RoutesPrivate= () => {
    const jwt = JSON.parse(localStorage.getItem('userConnected'));
    const decodedToken = decodeToken(jwt);

    return (
        Number.isSafeInteger(decodedToken && decodedToken.id)
            ? <Outlet /> : <Navigate to="/sign-in" />
    )
}

export default RoutesPrivate;