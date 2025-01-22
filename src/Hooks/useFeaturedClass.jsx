import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useFeaturedClass = () => {
    const axiosPublic = useAxiosPublic();

    const {refetch,data : featuredClassData =[], isFetching} = useQuery({

        queryKey:['featuredclassdata'],
        queryFn : async () =>{
            const res = await axiosPublic.get("/featured-class");
            return res.data;
        }

    })


    return [featuredClassData, isFetching];
};

export default useFeaturedClass;