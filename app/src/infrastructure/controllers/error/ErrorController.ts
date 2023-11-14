import { Request, Response, NextFunction } from 'express';

interface IError extends Error {
  statusCode: number | undefined;
  status: string | undefined;
  isOperational: boolean;
}

class ErrorController {
  private _sendErrorDev = (err: IError, res: Response, statusCode: number) => {
    res.status(statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  };

  private _sendErrorProd = (err: IError, res: Response, statusCode: number) => {
    if (err.isOperational) {
      res.status(statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      res.status(500).json({
        status: 'error',
        message: 'Message went very wrong',
      });
    }
  };

  public onGlobalError = (err: IError, req: Request, res: Response) => {
    console.log(err);
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    if (process.env.NODE_ENV === 'dev') {
      this._sendErrorDev(err, res, err.statusCode);
    } else if (process.env.NODE_ENV === 'production') {
      this._sendErrorProd(err, res, err.statusCode);
    }

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  };
}

export default ErrorController;
