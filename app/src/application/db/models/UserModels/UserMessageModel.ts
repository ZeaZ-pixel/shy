import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config';

class UserMessageModel extends Model {}

UserMessageModel.init(
  {
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
    sourceId: DataTypes.BIGINT,
    targetId: DataTypes.BIGINT,
    messageType: DataTypes.SMALLINT,
    status: DataTypes.SMALLINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    messageText: DataTypes.TEXT,
  },
  { sequelize, modelName: 'user_message' },
);

export default UserMessageModel;
