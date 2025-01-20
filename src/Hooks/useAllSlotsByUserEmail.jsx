import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useAllSlotsByUserEmail = () => {
    
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {refetch, data : trainerSlotData =[]} = useQuery({

        queryKey:['trainerSlotData'],
        queryFn : async() =>{
            const res = await axiosSecure.get(`/slot/${user?.email}`) 
            return res.data;
        }

    })
    
    return [trainerSlotData, refetch]
};

export default useAllSlotsByUserEmail;