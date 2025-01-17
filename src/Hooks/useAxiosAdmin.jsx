import axios from "axios";

const axiosAdmin = axios.create({
    baseURL : 'http://localhost:3000'
})

const useAxiosAdmin = () => {
    
    return axiosAdmin;
};

export default useAxiosAdmin;