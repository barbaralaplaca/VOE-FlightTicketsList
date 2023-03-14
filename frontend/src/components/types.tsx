export type FlightItem = {
    origin: string | undefined,
    destination: string | undefined,
    date: string | undefined,
    price: number | undefined,
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


export type countryCode = {
    datasetid: string,
    recordid: string,
    fields:{
        label_sp: string,
        onu_code: string,
        is_ilomember:string,
        geo_point_2d:[],
        iso2_code:string,
        iso3_code:string,
        label_fr:string,
        official_lang_code:string,
        label_en:string,
        is_receiving_quest:string,
        geo_shape:{
            coordinates:[],
            type:string
            }
    },
    geometry:{
        type:string,
        coordinates:[]
        },
    record_timestamp: string,
}

export type Option = {
    value: string,
    label: string
}