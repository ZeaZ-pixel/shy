import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class GroupModel extends Model {}

GroupModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    createdBy: DataTypes.BIGINT,
    updatedBy: DataTypes.BIGINT,
    title: DataTypes.STRING(75),
    slug: DataTypes.STRING(100),
    summary: DataTypes.STRING(100),
    status: DataTypes.SMALLINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    profile: DataTypes.TEXT,
    content: DataTypes.TEXT,
  },
  { sequelize, modelName: 'group' },
);

export default GroupModel;
