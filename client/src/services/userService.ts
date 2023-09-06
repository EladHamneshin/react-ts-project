import { axiosInstance as axios } from "../utils/axiosUtils";
import User from "../models/User";



export async function registerUser(user: User): Promise<User> {
    //axios.defaults.withCredentials = true; TODO
    try{
        const response = await axios.post(`/auth/register`, user);
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export async function loginUser(user: User): Promise<User> {
    //axios.defaults.withCredentials = true; TODO
    const response = await axios.post(`/auth/login`, user);
    const token = response.data.authToken;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    return response.data; 
}