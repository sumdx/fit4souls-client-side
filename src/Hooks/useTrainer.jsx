import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useTrainer = () => {
    const {user , loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const {data : isTrainer, isPending : isTrainerLoading} = useQuery({
        queryKey : [user?.email, 'isTrainer'],
        enabled: !loading && !!user?.email,
        queryFn : async () =>{
            const res = await axiosSecure.get(`/user/trainer/${user.email}`);
            return res.data?.trainer;
        }
    })

    return [isTrainer, isTrainerLoading]
};

export default useTrainer;