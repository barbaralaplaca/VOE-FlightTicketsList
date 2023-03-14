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

export type SearchResults = {
    price: number,
    link: string,
}

export type FetchedData = {
    Id: string,
    Direct: boolean,
    Name: string,
    CountryName: string,
    ImageUrl: string,
    DirectPrice: number,
    IndirectPrice: number,
    HotelUrl: string,
    HotelPrice: number,
    IndirectQuoteDateTime: string,
    DirectQuoteDateTime: string
}
