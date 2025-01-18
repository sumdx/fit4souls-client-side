import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllComunityPost = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch,data : allForumsData = []} = useQuery({

        queryKey : ['allForumsData'],
        queryFn : async () =>{
            const res = await axiosPublic.get('/forum')
            console.log(res)
            return res.data;
        }

    })

    return [allForumsData,refetch];
};

export default useAllComunityPost;