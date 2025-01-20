import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user , loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data : isAdmin, isPending : isAdminLoading} = useQuery({
        queryKey : [user?.email, 'isadmin'],
        enabled: !loading && !!user?.email,
        queryFn : async () =>{
            const res = await axiosSecure.get(`/user/admin/${user.email}`);
            return res.data?.admin;
        }
    })
    console.log(isAdmin);
    return [isAdmin, isAdminLoading]
};

export default useAdmin;