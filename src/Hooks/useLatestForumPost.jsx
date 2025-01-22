import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useLatestForumPost = () => {
    
    const axiosPublic = useAxiosPublic();
    const{data:latesForum =[], isFetching} = useQuery({
        queryKey :["latestForum"],
        queryFn : async ()=>{
            const res = await axiosPublic.get("/forum-latest")
            return res.data;
        }
    })
    return [latesForum, isFetching];
};

export default useLatestForumPost;