import { useQuery } from "@tanstack/react-query";
import useAxiosAdmin from "./useAxiosAdmin";


const useAllNewsletter = () => {
   
    const axiosAdmin = useAxiosAdmin();
    const {data : allNewsletterData = []} = useQuery({

        queryKey : ['allNewsletters'],
        queryFn : async () =>{
            const res = await axiosAdmin.get('/newsletter')
            return res.data;
        }

    })

    return [allNewsletterData];
};

export default useAllNewsletter;