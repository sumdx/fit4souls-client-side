import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';


const axiosSecure = axios.create({
    baseURL : 'http://localhost:3000'
})

const useAxiosSecure = () => {
    const {signOutUser} = useContext(AuthContext);
    const navigate = useNavigate();
    axiosSecure.interceptors.request.use(function(config){
        const token =localStorage.getItem('access-token')
        config.headers.authorization =`Bearer ${token}`;
        return config;
    },function(error){
        return Promise.reject(error);
    })

    axiosSecure.interceptors.response.use(function(response){
        return response;
    },function(error){
        const status = error.response.status;
        console.log(error)
        if(status===401 || status ===403){
            signOutUser();
            navigate("/login");
        }

        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;