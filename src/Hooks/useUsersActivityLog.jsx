import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useUsersActivityLog = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {refetch,data : activityLogData =[]} = useQuery({
        queryKey :["activityLogData"],
        queryFn :async () =>{
            const res = await axiosSecure.get(`/activity-log/?email=${user.email}`)
              return res.data;
        }
    })
    const rejectedData = activityLogData.filter(
        (item) => item.status.includes("rejected")
      );
      const pendingData = activityLogData.filter(
        (item) => item.status.includes("pending")
      );
    return [activityLogData,rejectedData, pendingData, refetch];
};

export default useUsersActivityLog;