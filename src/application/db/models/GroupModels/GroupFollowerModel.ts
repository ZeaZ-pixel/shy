import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class GroupFollowerModel extends Model {}

GroupFollowerModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    groupId: DataTypes.BIGINT,
    userId: DataTypes.BIGINT,
    type: DataTypes.SMALLINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: 'group_follower' },
);

export default GroupFollowerModel;
