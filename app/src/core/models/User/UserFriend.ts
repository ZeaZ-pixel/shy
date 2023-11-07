/* eslint-disable no-unused-vars */
export class UserFriend {
  constructor(
    readonly id: number,
    readonly sourceId: number,
    readonly targetId: number,
    readonly type: number,
    readonly status: number,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly notes: string,
  ) {}
}
