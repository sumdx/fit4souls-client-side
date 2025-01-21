import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllComunityPost = (currentPage, itemPerPage) => {
    const axiosPublic = useAxiosPublic();
    const {refetch,data : allForumsData = []} = useQuery({

        queryKey : ['allForumsData',currentPage, itemPerPage],
        queryFn : async () =>{
            const res = await axiosPublic.get(`/forum/?page=${currentPage}&size=${itemPerPage}`)
            console.log(res)
            return res.data;
        }

    })

    return [allForumsData,refetch];
};

export default useAllComunityPost;