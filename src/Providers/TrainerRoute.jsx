import React, { useContext } from 'react';
import useTrainer from '../Hooks/useTrainer';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Loading from '../Components/Loading';

const TrainerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isTrainer, isTrainerLoading] = useTrainer();
    const location = useLocation();

    if (loading || isTrainerLoading) {
      return (
        <Loading></Loading>
      );
    }
    if(user && isTrainer){
      return children;
    }
    
    return <Navigate to={"/"} state={{from : location}} replace></Navigate>
};

export default TrainerRoute;