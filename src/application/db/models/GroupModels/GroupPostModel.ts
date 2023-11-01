import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class GroupPostModel extends Model {}

GroupPostModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    groupId: DataTypes.BIGINT,
    userId: DataTypes.BIGINT,
    message: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: 'group_post' },
);

export default GroupPostModel;
