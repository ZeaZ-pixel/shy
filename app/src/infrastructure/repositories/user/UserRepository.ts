import { Op } from 'sequelize';
import { UserModel } from '~/application/db/models/UserModels';
import { IUserRepository } from '~/core/interfaces/user/IUserRepository';
import { User } from '~/core/models/user';

class UserRepository implements IUserRepository {
  constructor(private userModel: typeof UserModel) {}

  private mapToDomain = (userRecord: UserModel): User => {
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
  };

  private mapToPersistence(user: User) {
    return {
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
    };
  }

  findByEmail = async (email: string): Promise<User | null> => {
    const userRecord = await this.userModel.findOne({ where: { email } });
    if (!userRecord) return null;
    return this.mapToDomain(userRecord);
  };

  findByUsername = async (username: string): Promise<User | null> => {
    const userRecord = await this.userModel.findOne({ where: { username } });
    if (!userRecord) return null;
    return this.mapToDomain(userRecord);
  };

  findByUsernameOrEmail = async (usernameOrEmail: string): Promise<User | null> => {
    const userRecord = await this.userModel.findOne({
      where: {
        [Op.or]: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      },
    });
    if (!userRecord) return null;
    return this.mapToDomain(userRecord);
  };

  findAll = async (): Promise<User[]> => {
    const userRecords = await UserModel.findAll();
    return userRecords.map((record) => this.mapToDomain(record));
  };

  save = async (user: User): Promise<User> => {
    const savedUser = await UserModel.create(this.mapToPersistence(user));
    return savedUser;
  };

  setRefreshToken = async (userId: number, token: string): Promise<void> => {
    await UserModel.update({ refreshToken: token }, { where: { id: userId } });
  };

  getUserByRefreshToken = async (token: string): Promise<User | null> => {
    const userRecord = await UserModel.findOne({ where: { refreshToken: token } });
    if (!userRecord) return null;
    return this.mapToDomain(userRecord);
  };
}

export default UserRepository;
