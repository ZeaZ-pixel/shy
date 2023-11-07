/* eslint-disable no-unused-vars */
export class User {
  constructor(
    readonly id: number,
    readonly firstName: string,
    readonly lastName: string,
    readonly username: string,
    readonly phone: string,
    readonly email: string,
    readonly password: string,
    readonly registeredAt: Date,
    readonly lastLogin: Date,
    readonly intro: string,
    readonly profile: string,
  ) {}
}
