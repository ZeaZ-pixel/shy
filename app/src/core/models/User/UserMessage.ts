/* eslint-disable no-unused-vars */
export class UserMessage {
  constructor(
    readonly id: number,
    readonly sourceId: number,
    readonly targetId: number,
    readonly message: string,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {}
}
