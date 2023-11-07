import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class UserFollowerModel extends Model {}

UserFollowerModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    sourceId: DataTypes.BIGINT,
    targetId: DataTypes.BIGINT,
    type: DataTypes.SMALLINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: 'user_follower' },
);

export default UserFollowerModel;
