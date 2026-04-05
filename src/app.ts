import express from 'express';
import {productRouter} from './routes/productRoutes';
// require('dotenv').config();

const app = express();

app.use(express.json());

app.use('/product', productRouter);

export {app};
