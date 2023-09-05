export default interface Trip {
    id: string,
    name: string,
    destination: string,
    startDate: string,
    endDate: string,
    image: string
    activities?: string[],
    description?: string,
    price?: number
};