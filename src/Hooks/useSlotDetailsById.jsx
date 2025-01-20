import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSlotDetailsById = (id) => {
    const axiosSecure= useAxiosSecure();
    const {isLoading,data : indSlotData ={}} = useQuery({
        queryKey:['indSlotData'],
        queryFn : async() =>{
            const res = await axiosSecure.get(`/slotdata/${id}`)
            return res.data;
        }
    })
    return [indSlotData, isLoading];
};

export default useSlotDetailsById;