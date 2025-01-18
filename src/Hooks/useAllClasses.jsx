import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllClasses = () => {
    
    const axiosPublic = useAxiosPublic();

    const {refetch,data : allClassesData =[]} = useQuery({

        queryKey:['allClassesData'],
        queryFn : async () =>{
            const res = await axiosPublic.get("/classes");
            return res.data;
        }

    })


    return [allClassesData];
};

export default useAllClasses;