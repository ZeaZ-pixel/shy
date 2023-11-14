import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import ErrorHandlingMiddleware from '~/infrastructure/utils/ErrorHandlingMiddleware';
import { validateToken } from '~/infrastructure/utils/jwtCreator';

class UserAuthValidators {
  registerSchema() {
    return Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string()
        .min(8)
        .regex(/[A-Z]/, 'one uppercase letter')
        .regex(/[!@#$%^&*(),.?":{}|<>]/, 'one special character')
        .required(),
      username: Joi.string().min(3).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    });
  }

  loginSchema() {
    return Joi.object({
      password: Joi.string().required(),
      email: Joi.string().email(),
      username: Joi.string(),
    })
      .or('email', 'username')
      .xor('email', 'username')
      .messages({
        'object.missing': 'Необходимо указать либо email, либо username',
        'object.xor': 'Необходимо указать только email или username, но не оба',
      });
  }

  verifyToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new ErrorHandlingMiddleware('Отсутствует заголовок авторизации', 403);
    }
    const token = authHeader.split(' ')[1];
    validateToken(token);
    next();
  }

  refrashSchema() {
    return Joi.object({
      refreshToken: Joi.string().required(),
    });
  }
}

export default UserAuthValidators;
