import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import routes from './routes';
import startPostgresql from './db';
import ErrorHandlingMiddleware from '~/infrastructure/utils/ErrorHandlingMiddleware';
import ErrorController from '~/infrastructure/controllers/error/ErrorController';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const errorController = new ErrorController();

app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new ErrorHandlingMiddleware(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorController.onGlobalError);

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
