import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useBookingInfo = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {refetch,data : bookingData =[]} = useQuery({

        queryKey:['bookingData', user?.email],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/booking/${user?.email}`);
            return res.data;
        }

    })


    return [bookingData];
    
};

export default useBookingInfo;