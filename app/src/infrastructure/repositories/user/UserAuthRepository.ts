import { Op } from 'sequelize';
import { UserModel } from '~/application/db/models/UserModels';
import { IUserRepository } from '~/core/interfaces/user/IUserRepository';
import { User } from '~/core/models/user';

class UserAuthRepository implements IUserRepository {
  constructor(private userModel: typeof UserModel) {}
  findByEmail = async (email: string): Promise<User | null> => {
    console.log(email);
    const userRecord = await this.userModel.findOne({ where: { email } });
    console.log(userRecord);
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
  };

  findByUsername = async (username: string): Promise<User | null> => {
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
  };

  findByUsernameOrEmail = async (usernameOrEmail: string): Promise<User | null> => {
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
  };

  save = async (user: User): Promise<User> => {
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
  };

  setRefreshToken = async (userId: number, token: string): Promise<void> => {
    await UserModel.update({ refreshToken: token }, { where: { id: userId } });
  };

  getUserByRefreshToken = async (token: string): Promise<User | null> => {
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
  };
}

export default UserAuthRepository;
