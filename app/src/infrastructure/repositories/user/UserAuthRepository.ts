import { Op } from 'sequelize';
import { UserModel } from '~/application/db/models/UserModels';
import { IUserRepository } from '~/core/interfaces/user/IUserRepository';
import { User } from '~/core/models/user';

class UserAuthRepository implements IUserRepository {
  constructor(private userModel: typeof UserModel) {}
  async findByEmail(email: string): Promise<User | null> {
    const userRecord = await this.userModel.findOne({ where: { email } });
    if (!userRecord) return null;
    return new User(
      userRecord.id,
      userRecord.firstName,
      userRecord.lastName,
      userRecord.username,
      userRecord.phone,
      userRecord.email,
      userRecord.password,
      userRecord.registeredAt,
      userRecord.lastLogin,
      userRecord.intro,
      userRecord.profile,
    );
  }

  async findByUsername(username: string): Promise<User | null> {
    const userRecord = await this.userModel.findOne({ where: { username } });
    if (!userRecord) return null;
    return new User(
      userRecord.id,
      userRecord.firstName,
      userRecord.lastName,
      userRecord.username,
      userRecord.phone,
      userRecord.email,
      userRecord.password,
      userRecord.registeredAt,
      userRecord.lastLogin,
      userRecord.intro,
      userRecord.profile,
    );
  }

  async findByUsernameOrEmail(usernameOrEmail: string): Promise<User | null> {
    const userRecord = await this.userModel.findOne({
      where: {
        [Op.or]: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });
    if (!userRecord) return null;
    return new User(
      userRecord.id,
      userRecord.firstName,
      userRecord.lastName,
      userRecord.username,
      userRecord.phone,
      userRecord.email,
      userRecord.password,
      userRecord.registeredAt,
      userRecord.lastLogin,
      userRecord.intro,
      userRecord.profile,
    );
  }

  async save(user: User): Promise<User> {
    const savedUser = await UserModel.create({
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
      password: user.password,
      phone: user.phone,
      registeredAt: user.registeredAt,
      lastLogin: user.lastLogin,
      intro: user.intro,
      profile: user.profile,
    });
    user.id = savedUser.id;
    return user;
  }

  async setRefreshToken(userId: number, token: string): Promise<void> {
    await UserModel.update({ refreshToken: token }, { where: { id: userId } });
  }

  async getUserByRefreshToken(token: string): Promise<User | null> {
    const userRecord = await UserModel.findOne({ where: { refreshToken: token } });
    if (!userRecord) return null;
    return new User(
      userRecord.id,
      userRecord.firstName,
      userRecord.lastName,
      userRecord.username,
      userRecord.phone,
      userRecord.email,
      userRecord.password,
      userRecord.registeredAt,
      userRecord.lastLogin,
      userRecord.intro,
      userRecord.profile,
    );
  }
}

export default UserAuthRepository;
