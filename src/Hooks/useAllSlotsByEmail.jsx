import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllSlotsByEmail = (email) => {
   
    const axiosPublic = useAxiosPublic();
    const {refetch, data : trainerSlotByEmail =[]} = useQuery({

        queryKey:['trainerSlotByEmail'],
        queryFn : async() =>{
            const res = await axiosPublic.get(`/slots/${email}`)
            return res.data;
        }

    })
    return [trainerSlotByEmail]
};

export default useAllSlotsByEmail;