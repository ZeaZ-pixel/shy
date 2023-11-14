import jwt from 'jsonwebtoken';
import { userRoleType } from '~/core/interfaces/user/userTypes';
import ErrorHandlingMiddleware from './ErrorHandlingMiddleware';

export function generateAccessToken(userId: number, role: userRoleType) {
  return jwt.sign({ id: userId, role }, process.env.SECRET_KEY_ACCESS as string, {
    expiresIn: '15m',
  });
}

export function generateRefreshToken(userId: number, role: userRoleType) {
  return jwt.sign({ id: userId, role }, process.env.SECRET_KEY_REFRESH as string, {
    expiresIn: '7d',
  });
}

export function validateToken(token: string) {
  jwt.verify(token, process.env.SECRET_KEY_ACCESS as string, (err, data) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        throw new ErrorHandlingMiddleware('Expired Token', 401);
      } else {
        throw new ErrorHandlingMiddleware('Unfaithful Token', 403);
      }
    }
  });
}
