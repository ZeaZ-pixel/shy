/* eslint-disable no-unused-vars */
export class GroupMember {
  constructor(
    readonly id: number,
    readonly groupId: number,
    readonly userId: number,
    readonly roleId: number,
    readonly status: number,
    readonly createdAt: Date,
    readonly updatedAt: Date,
    readonly notes: string,
  ) {}
}
