import Trip from "../models/Trip";
import { axiosInstance as axios } from "../utils/axiosUtils";


export async function getTrips(): Promise<Trip[]> {
    const response = await axios.get<Trip[]>(`/trips`)
    return response.data;
}

export async function getTrip(id: string): Promise<Trip> {
    const response =await axios.get<Trip>(`/trips/${id}`)
    return response.data;
}

export async function updateTrip(trip: Trip): Promise<Trip> {
    const response = await axios.put<Trip>(`/trips/${trip.id}`, trip);
    return response.data;
}

export async function deleteTrip(id: string) {
    const response =  await axios.delete<Trip>(`/trips/${id}`)
    return response.data;
}

export async function createTrip(trip: Trip): Promise<Trip> {
    const response = await axios.post<Trip>(`/trips`, trip)
    return response.data;
}
