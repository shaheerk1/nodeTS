import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

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