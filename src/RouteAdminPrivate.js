import React from 'react'

import { decodeToken } from 'react-jwt';
import { Outlet, Navigate } from 'react-router-dom';

const RouteAdminPrivate= () => {
    
    const jwt = JSON.parse(localStorage.getItem('userDriving'));
    const decodedToken = decodeToken(jwt && jwt);

    return (
        Number.isSafeInteger(decodedToken && decodedToken.id)
            ? <Outlet /> : <Navigate to="/admin/login" />
    )
}

export default RouteAdminPrivate;