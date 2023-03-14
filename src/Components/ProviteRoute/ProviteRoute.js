import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Contex } from '../../Context/AuthProvider';
import Spinner from '../Share/Spinner/Spinner';

const ProviteRoute = ( {children} ) => {
    const {user, loading} = useContext(Contex)
    const location= useLocation()
    
    if(loading){
        return <Spinner> </Spinner>
    }

    if(user?.email){
        return children
    }

    return <Navigate to="/login" state={ {from:location} } replace ></Navigate>
};

export default ProviteRoute;