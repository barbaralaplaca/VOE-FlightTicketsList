export type FlightItem = {
    origin: string,
    destination: string,
    date: string,
    price: number,
}

export interface FlightItemDB extends FlightItem {
    _id: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}

