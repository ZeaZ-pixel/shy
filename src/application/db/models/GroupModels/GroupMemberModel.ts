import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class GroupMemberModel extends Model {}

GroupMemberModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    groupId: DataTypes.BIGINT,
    userId: DataTypes.BIGINT,
    roleId: DataTypes.SMALLINT,
    status: DataTypes.SMALLINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    notes: DataTypes.TEXT,
  },
  { sequelize, modelName: 'group_member' },
);

export default GroupMemberModel;
