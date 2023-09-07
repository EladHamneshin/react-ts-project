import { axiosInstance as axios } from "../utils/axiosUtils";
import User from "../models/User";

export async function registerUser(user: User): Promise<User> {
    try{
        const response = await axios.post(`/auth/register`, user);
        return response.data;
    }
    catch(error){
        throw error;
    }
}

export async function loginUser(user: User): Promise<User> {
    const response = await axios.post(`/auth/login`, user);
    const token = response.data.responseObj.token;
    localStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    return response.data; 
}