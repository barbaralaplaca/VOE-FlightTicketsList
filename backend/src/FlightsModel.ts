import { Schema, model } from 'mongoose';

interface IFlight {
    origin: string,
    destination: string,
    date: string,
    price: number,
}

const flightSchema = new Schema<IFlight>({
    origin: { type: String, required: true },
    destination: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });

export const FlightSearch = model<IFlight>('Flight Search', flightSchema);

