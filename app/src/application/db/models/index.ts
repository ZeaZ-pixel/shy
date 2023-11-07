import { UserFollowerModel, UserFriendModel, UserMessageModel, UserModel, UserPostModel } from './UserModels';
import { GroupFollowerModel, GroupMemberModel, GroupMessageModel, GroupMetaModel, GroupModel, GroupPostModel } from './GroupModels';

const createModel = () => {
  UserModel.hasMany(UserMessageModel, { foreignKey: 'sourceId', as: 'sentMessages' });
  UserModel.hasMany(UserMessageModel, { foreignKey: 'targetId', as: 'receivedMessages' });
  UserMessageModel.belongsTo(UserModel, { foreignKey: 'sourceId', as: 'sender' });
  UserMessageModel.belongsTo(UserModel, { foreignKey: 'targetId', as: 'receiver' });

  UserModel.hasMany(UserFollowerModel, { foreignKey: 'sourceId', as: 'followers' });
  UserModel.hasMany(UserFollowerModel, { foreignKey: 'targetId', as: 'following' });
  UserFollowerModel.belongsTo(UserModel, { foreignKey: 'sourceId', as: 'follower' });
  UserFollowerModel.belongsTo(UserModel, { foreignKey: 'targetId', as: 'followed' });

  UserModel.hasMany(UserPostModel, { foreignKey: 'userId' });
  UserPostModel.belongsTo(UserModel, { foreignKey: 'userId' });

  GroupModel.hasMany(GroupPostModel, { foreignKey: 'groupId' });
  GroupPostModel.belongsTo(GroupModel, { foreignKey: 'groupId' });

  GroupModel.hasMany(GroupMessageModel, { foreignKey: 'groupId' });
  GroupMessageModel.belongsTo(GroupModel, { foreignKey: 'groupId' });

  GroupModel.hasMany(GroupMemberModel, { foreignKey: 'groupId' });
  GroupMemberModel.belongsTo(GroupModel, { foreignKey: 'groupId' });

  UserModel.hasMany(GroupMemberModel, { foreignKey: 'userId' });
  GroupMemberModel.belongsTo(UserModel, { foreignKey: 'userId' });

  GroupModel.hasMany(GroupFollowerModel, { foreignKey: 'groupId' });
  GroupFollowerModel.belongsTo(GroupModel, { foreignKey: 'groupId' });

  UserModel.hasMany(GroupFollowerModel, { foreignKey: 'userId' });
  GroupFollowerModel.belongsTo(UserModel, { foreignKey: 'userId' });

  GroupModel.hasMany(GroupMetaModel, { foreignKey: 'groupId' });
  GroupMetaModel.belongsTo(GroupModel, { foreignKey: 'groupId' });

  UserModel.hasMany(UserFriendModel, { foreignKey: 'sourceId', as: 'friends' });
  UserModel.hasMany(UserFriendModel, { foreignKey: 'targetId', as: 'friendOf' });
  UserFriendModel.belongsTo(UserModel, { foreignKey: 'sourceId', as: 'requester' });
  UserFriendModel.belongsTo(UserModel, { foreignKey: 'targetId', as: 'requested' });
};

export default createModel;
