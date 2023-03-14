import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import flightsRoute from './flightsRoutes'
import cors from 'cors';

dotenv.config();
const app = express();
const uri = process.env.MONGO_URI;

app.use(express.json());
app.use('/api/flights', flightsRoute);
app.use(cors());

app.get('/', (req, res) => {
      res.json({ message: 'Welcome to Voe' });
    })
    
mongoose
  .connect(uri!)
  .then(() => {
    console.log('connect to DB', process.env.PORT)
  })
  .catch((err: Error) => {
    console.log(`MongoDB Error: ${err}`);
  });
    
app.listen(process.env.PORT, () => console.log('listening on port', process.env.PORT))
export { app };