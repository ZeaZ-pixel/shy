import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class GroupMessageModel extends Model {}

GroupMessageModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    groupId: DataTypes.BIGINT,
    userId: DataTypes.BIGINT,
    message: DataTypes.TEXT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  { sequelize, modelName: 'group_message' },
);

export default GroupMessageModel;
