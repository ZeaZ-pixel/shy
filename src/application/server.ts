import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import routes from './routes';
import startPostgresql from './db';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

export const startServer = async (): Promise<void> => {
  try {
    await startPostgresql();
    app.listen(PORT, (): void => {
      console.log(`server started: http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
