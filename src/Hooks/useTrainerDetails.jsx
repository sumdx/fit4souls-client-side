import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTrainerDetails = ({id}) => {
    const axiosSecure = useAxiosSecure();

    const {isLoading, isFetching, data : trainer ={}} = useQuery({
        queryKey : ["trainer",id],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/trainers/${id}`)
            return res.data;
        }
    })
    return [trainer,isLoading,isFetching];
};

export default useTrainerDetails;