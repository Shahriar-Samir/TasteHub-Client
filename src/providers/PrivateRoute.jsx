import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../pages/Loading';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loadingSpinner,userLoggedIn} = useContext(AuthContext)
    const location = useLocation()
    if(loadingSpinner){
        return <Loading/>
    }
    if(userLoggedIn){
        return children
    }

    return <Navigate to='/signin' state={location.pathname}></Navigate>
};

export default PrivateRoute;