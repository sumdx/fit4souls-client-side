import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';
import { Navigate } from 'react-router-dom';

const UserRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    
    if(loading){
        <Loading></Loading>
    }

    if(user){
        return children;
    }
    
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    
};

export default UserRoute;