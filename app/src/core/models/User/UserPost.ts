/* eslint-disable no-unused-vars */
export class UserPost {
  constructor(
    readonly id: number,
    readonly userId: number,
    readonly senderId: number,
    readonly message: string,
    readonly createdAt: Date,
    readonly updatedAt: Date,
  ) {}
}
