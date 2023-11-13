import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

export function generateToken(userId: number) {
  return jwt.sign({ id: userId }, SECRET_KEY as string, { expiresIn: '1h' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET_KEY as string);
  } catch (error) {
    return null;
  }
}
