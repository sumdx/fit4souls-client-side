import React from 'react';
import useAxiosAdmin from './useAxiosAdmin';
import { useQuery } from '@tanstack/react-query';

const useStatData = () => {
    const axiosAdmin = useAxiosAdmin();

    const {data : adminStat, isFetching : isStatFetching} = useQuery({
        queryKey : ["adminstat"],
        queryFn : async ()=>{
            const res = await axiosAdmin.get("/adminstat")
            return res.data;
        } 
    })

    return [adminStat, isStatFetching]

};

export default useStatData;