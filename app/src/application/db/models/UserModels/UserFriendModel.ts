import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class UserFriendModel extends Model {}

UserFriendModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    sourceId: DataTypes.BIGINT,
    targetId: DataTypes.BIGINT,
    type: DataTypes.SMALLINT,
    status: DataTypes.SMALLINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    notes: DataTypes.TEXT,
  },
  { sequelize, modelName: 'user_friend' },
);

export default UserFriendModel;
