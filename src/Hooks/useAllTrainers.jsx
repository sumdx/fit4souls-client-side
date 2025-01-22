import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllTrainers = () => {
    const axiosPublic = useAxiosPublic();
   const {data: allTrainersData=[], isFetching : isAllTrainerFetching, refetch : allTrainerRefetch} = useQuery({
        queryKey: ['alltrainers'],
        queryFn : async ()=>{
            const res = await axiosPublic.get("/trainers")
            return res.data;
        }
   })
   return [allTrainersData,isAllTrainerFetching, allTrainerRefetch];
};

export default useAllTrainers;