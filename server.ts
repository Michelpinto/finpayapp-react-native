import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDb from './api/config/db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6000;
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/users', require('./api/routes/userRoutes'));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
