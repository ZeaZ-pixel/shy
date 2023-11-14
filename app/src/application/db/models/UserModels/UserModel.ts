import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class UserModel extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare username: string;
  declare phone: string;
  declare email: string;
  declare password: string;
  declare registeredAt: Date;
  declare lastLogin: Date;
  declare intro: string;
  declare profile: string;
}

UserModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING(70), allowNull: false },
    lastName: { type: DataTypes.STRING(70), allowNull: false },
    username: { type: DataTypes.STRING(70), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(70), allowNull: false, unique: true },
    phone: { type: DataTypes.STRING(30), unique: true },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 120],
      },
    },
    registeredAt: DataTypes.DATE,
    lastLogin: DataTypes.DATE,
    intro: DataTypes.TEXT,
    profile: DataTypes.TEXT,
  },
  { sequelize, modelName: 'user' },
);

export default UserModel;
