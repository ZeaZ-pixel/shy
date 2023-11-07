/* eslint-disable no-unused-vars */
export class GroupMessage {
  constructor(
    readonly id: number,
    readonly groupId: number,
    readonly userId: number,
    readonly message: string,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {}
}
