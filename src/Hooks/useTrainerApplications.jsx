import React from 'react';
import useAxiosAdmin from './useAxiosAdmin';
import { useQuery } from '@tanstack/react-query';

const useTrainerApplications = () => {

    const axiosAdmin = useAxiosAdmin();
    const {data : applications =[]} = useQuery({
        queryKey: ["applications"],
        queryFn : async () =>{
            const res = await axiosAdmin.get("/trainers/apply")
            return res.data;
        }

    })
    return [applications];
};

export default useTrainerApplications;