import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTrainerDetails = ({id}) => {
    const axiosSecure = useAxiosSecure();

    const {data : trainer =[]} = useQuery({
        queryKey : ["trainer"],
        queryFn : async () =>{
            const res = await axiosSecure.get(`/trainers/${id}`)
            return res.data;
        }
    })
    return [trainer];
};

export default useTrainerDetails;