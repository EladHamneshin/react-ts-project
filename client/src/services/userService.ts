import axios from "axios";
import User from "../models/User";

const API_URL = 'http://localhost:3000/api';
const TOKEN = 'test-token';

export async function registerUser(user: User): Promise<User> {
    //axios.defaults.withCredentials = true; TODO
    const response = await axios.post(`${API_URL}/auth/register`, user, {
        headers: {
            Authorization: TOKEN}
    });
    return response.data;
}

export async function loginUser(user: User): Promise<User> {
    //axios.defaults.withCredentials = true; TODO
    const response = await axios.post(`${API_URL}/auth/login`, user);
    return response.data;
}