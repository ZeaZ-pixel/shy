import { User } from '~/core/models/user';

export interface IUserRepository {
  findByEmail(email: string): Promise<User | null>;
  findByUsername(username: string): Promise<User | null>;
  findByUsernameOrEmail(usernameOrEmail: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<User>;
  setRefreshToken(userId: number, token: string): Promise<void>;
  getUserByRefreshToken(token: string): Promise<User | null>;
}
