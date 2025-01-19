import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Providers/AuthProvider';

const useTrainerDataByEmail = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {refetch : refetchTrainer,data : trainerData =[]} = useQuery({

        queryKey:['trainerData'],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/trainer/${user?.email}`);
            
            return res.data;
        }

    })


    return [trainerData,refetchTrainer];
};

export default useTrainerDataByEmail;