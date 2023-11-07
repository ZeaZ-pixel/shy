import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class GroupMetaModel extends Model {}

GroupMetaModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    groupId: DataTypes.BIGINT,
    key: DataTypes.STRING(100),
    content: DataTypes.TEXT,
  },
  { sequelize, modelName: 'group_meta' },
);

export default GroupMetaModel;
