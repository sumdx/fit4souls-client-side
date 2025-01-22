import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useAllComunityPost = (currentPage, itemPerPage) => {
    const axiosPublic = useAxiosPublic();
    const {refetch,data, isFetching } = useQuery({

        queryKey : ['allForumsData',currentPage, itemPerPage],
        queryFn : async () =>{
            const res = await axiosPublic.get(`/forum/?page=${currentPage}&size=${itemPerPage}`)

            return res.data;
        }

    })
    const allForumsData = data?.data || [];
    const totalCount = data?.totalCount || 0;
    return [allForumsData,refetch,totalCount,isFetching];
};

export default useAllComunityPost;