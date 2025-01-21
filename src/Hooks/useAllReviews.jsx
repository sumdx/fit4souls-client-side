import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllReviews = () => {
    
    const axiosPublic = useAxiosPublic();

    const {data : reviewData, refetch : reviewRefetch} = useQuery({
        queryKey : ["reviewData"],
        queryFn : async() =>{
            const res = await axiosPublic.get("/review");
            return res.data;
        }
    })

    return [reviewData, reviewRefetch]


};

export default useAllReviews;