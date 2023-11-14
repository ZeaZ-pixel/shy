import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { IUserRegister } from '~/core/interfaces/user/IUserAuth';
import { IUserRepository } from '~/core/interfaces/user/IUserRepository';
import { User } from '~/core/models/user';

class UserAuthn {
  constructor(private userRepository: IUserRepository) {}
  executeRegister = async (data: IUserRegister): Promise<User> => {
    const existingEmail = await this.userRepository.findByEmail(data.email);
    if (existingEmail) {
      throw new Error('Email is already in use.');
    }

    const existingUsername = await this.userRepository.findByUsername(data.email);
    if (existingUsername) {
      throw new Error('Username is already in use.');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const newUser = new User(0, data.firstName, data.lastName, data.username, null, data.email, hashedPassword, new Date(), new Date(), null, null);
    return this.userRepository.save(newUser);
  };

  executeLogin = async (usernameOrEmail: string, password: string): Promise<{ accessToken: string; refreshToken: string }> => {
    const user = await this.userRepository.findByUsernameOrEmail(usernameOrEmail);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials.');
    }

    const accessToken = jwt.sign({ userId: user.id }, process.env.SECRET_KEY_ACCESS as string, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user.id }, process.env.SECRET_KEY_REFRESH as string, { expiresIn: '7d' });

    return { accessToken, refreshToken };
  };

  executeRefresh = async (refreshToken: string): Promise<{ accessToken: string }> => {
    const user = await this.userRepository.getUserByRefreshToken(refreshToken);
    if (!user) {
      throw new Error('Invalid refresh token.');
    }
    const accessToken = jwt.sign({ userId: user.id }, process.env.SECRET_KEY_ACCESS as string, { expiresIn: '15m' });

    return { accessToken };
  };

  getAll = async (): Promise<User[]> => {
    return this.userRepository.findAll();
  };
}

export default UserAuthn;
