import axios from "axios";
import Trip from "../types/Trip";

const API_URL = 'http://localhost:3000/api';

export async function getTrips(): Promise<Trip[]> {
    return (await axios.get<Trip[]>(`${API_URL}/trips`)).data;
}