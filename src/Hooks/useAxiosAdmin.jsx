import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";

const axiosAdmin = axios.create({
    baseURL : 'https://b10a12-server-side-sumdx.vercel.app'
})

const useAxiosAdmin = () => {
    const {signOutUser} = useContext(AuthContext);
        const navigate = useNavigate();
        axiosAdmin.interceptors.request.use(function(config){
            const token =localStorage.getItem('access-token')
            config.headers.authorization =`Bearer ${token}`;
            return config;
        },function(error){
            return Promise.reject(error);
        })
    
        axiosAdmin.interceptors.response.use(function(response){
            return response;
        },function(error){
            const status = error.response.status;
            if(status===401 || status ===403){
                signOutUser();
                navigate("/login");
            }
    
            return Promise.reject(error);
        })
    
    return axiosAdmin;
};

export default useAxiosAdmin;