import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class UserPostModel extends Model {}

UserPostModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    userId: DataTypes.BIGINT,
    senderId: DataTypes.BIGINT,
    message: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: 'user_post' },
);

export default UserPostModel;
