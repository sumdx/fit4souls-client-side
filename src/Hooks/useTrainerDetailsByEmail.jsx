import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useTrainerDetailsByEmail = (email) => {
    const axiosSecure = useAxiosSecure();

    const {isLoading, refetch, data : trainerByEmail ={}} = useQuery({
        queryKey : ["trainerByEmail",email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/trainer/${email}`)
            return res.data;
        }
    })
    return [trainerByEmail,isLoading];
};

export default useTrainerDetailsByEmail;