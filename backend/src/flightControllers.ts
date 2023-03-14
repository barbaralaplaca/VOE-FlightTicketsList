import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { FlightSearch } from "./FlightsModel";

const getList = async (req: Request, res: Response): Promise<any> => {
    try {
        const list = await FlightSearch.find();
        if(!list) {
            return res
            .status(404)
            .json({ error: 'List not found' });
            }
            return res
            .status(200)
            .header('Content-Type: application/json')
            .json(list);
        } catch (error) {
            return res.status(500).json(error);
        }
    }

const createFlightItem = async (req: Request, res: Response) => {
    try {
        const { origin, destination, date, price, _id } = req.body;
        const flight = await FlightSearch.create({ origin, destination, date, price });
        res
        .set('location', `/api/flights/${_id}`)
        .status(201)
        .header('Content-Type: application/json')
        .json(flight);
    } catch (error) {
        res.status(500).json({ error })
    }
}

const deleteItem = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
        .status(404)
        .json({ error: 'Item not found' });
    }
    const item = await FlightSearch.findOneAndDelete({ _id: id })

    if (!item) {
        return res
        .status(404)
        .json({ error: 'Item not found' });
    }
    res
    .status(204)
    .send();
} catch (error) {
    res
    .status(500)
    .json({ error })
}
}

export { getList, createFlightItem, deleteItem };