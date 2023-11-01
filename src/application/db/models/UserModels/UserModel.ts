import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class UserModel extends Model {}

UserModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING(50),
    lastName: DataTypes.STRING(50),
    username: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    email: { type: DataTypes.STRING(50), allowNull: false, unique: true },
    password: DataTypes.STRING(50),
    registrationDate: DataTypes.DATE,
    lastLogin: DataTypes.DATE,
    intro: DataTypes.TEXT,
    profile: DataTypes.TEXT,
  },
  { sequelize, modelName: 'user' },
);

export default UserModel;
