import "reflect-metadata";
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AppDataSource } from "./data-source";

dotenv.config();

// Initialize the data source (optional, depending on your application structure)
AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin: '*',
  })
);

const port = process.env.PORT || 3000;
app.get('/', (req: Request, res: Response) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));