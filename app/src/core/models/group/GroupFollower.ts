/* eslint-disable no-unused-vars */
export class GroupFollower {
  constructor(
    readonly id: number,
    readonly groupId: number,
    readonly userId: number,
    readonly type: number,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {}
}
