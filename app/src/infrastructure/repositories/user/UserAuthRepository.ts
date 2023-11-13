import { Sequelize } from 'sequelize';
import { UserModel } from '~/application/db/models/UserModels';
import { IUserRepository } from '~/core/interfaces/user/IUserRepository';
import { User } from '~/core/models/user';

class UserAuthRepository implements IUserRepository {
  async findByUsername(username: string): Promise<User | null> {}
  async findBymEail(email: string): Promise<User | null> {
    
  }

  async findByUsernameOrEmail(usernameOrEmail: string): Promise<User | null> {}

  async save(user: User): Promise<User> {}

  async setRefreshToken(userId: number, token: string): Promise<void> {
    await UserModel.update({ refreshToken: token }, { where: { id: userId } });
  }

  async getUserByRefreshToken(token: string): Promise<User | null> {
    const userRecord = await UserModel.findOne({ where: { refreshToken: token } });
    return userRecord ? new User(...userRecord) : null;
  }
}

export default UserAuthRepository;
