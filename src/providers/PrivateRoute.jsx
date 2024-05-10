import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../pages/Loading';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loadingSpinner,loggedIn} = useContext(AuthContext)
    if(loadingSpinner){
        return <Loading/>
    }
    if(loggedIn){
        return children
    }

    return <Navigate to='/signin'></Navigate>
};

export default PrivateRoute;