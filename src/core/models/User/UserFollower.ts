/* eslint-disable no-unused-vars */
export class UserFollower {
  constructor(
    readonly id: number,
    readonly sourceId: number,
    readonly targetId: number,
    readonly type: number,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {}
}
