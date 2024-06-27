import "reflect-metadata";
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { AppDataSource } from "./data-source";
import { Application } from 'express';

dotenv.config();

const app : Application = express();
app.use(express.json({ limit: '1mb' }));
app.use(
  cors({
    origin: '*',
  })
);

const port = process.env.PORT || 3000;
app.get('/', (req: Request, res: Response) => res.send('Hello World!'));

app.get('/users', async (req: Request, res: Response) => {
    const users = await AppDataSource.getRepository('User').find();
    res.json(users);
});

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));

export default app;