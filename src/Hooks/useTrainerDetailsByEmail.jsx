import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useTrainerDetailsByEmail = (email) => {
    const axiosSecure = useAxiosSecure();
    console.log(email)
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