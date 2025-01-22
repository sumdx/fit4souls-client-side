import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useGetUserData = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    
        const {data: userData=[], isLoading, isFetching, refetch} = useQuery({
            queryKey : ['userData',user?.email],
            queryFn: async () =>{
                if (!user?.email) return [];
                const res = await axiosSecure.get( `/users/${user.email}`)
                return res.data;
            },
            enabled: !!user?.email,
        })
        return [userData,isLoading,refetch, isFetching];
};

export default useGetUserData;