import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCustomClassData = (currentPage, itemPerPage,search) => {
    const axiosPublic = useAxiosPublic();
    const {refetch,data, isFetching } = useQuery({

        queryKey : ['allCustomClassData',currentPage, itemPerPage,search],
        queryFn : async () =>{
            const res = await axiosPublic.get(`/class-custom/?page=${currentPage}&size=${itemPerPage}&search=${search}`)

            return res.data;
        }

    })
    const allCustomClassData = data?.data || [];
    const totalCount = data?.totalCount || 0;
    return [allCustomClassData,refetch,totalCount,isFetching];
};

export default useCustomClassData;