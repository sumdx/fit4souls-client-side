import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUsersActivityLog = ({email}) => {
    const axiosSecure = useAxiosSecure();
    const {data : activityLog =[]} = useQuery({
        queryKey :["activityLog"],
        queryFn :async () =>{
            const res = await axiosSecure.get("/activity-log",{
                email: email,
              })
        }
    })
    return [];
};

export default useUsersActivityLog;