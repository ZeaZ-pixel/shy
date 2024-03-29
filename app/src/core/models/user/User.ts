import { userRoleType } from '~/core/interfaces/user/userTypes';

/* eslint-disable no-unused-vars */
export class User {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public username: string,
    public phone: string | null,
    public email: string,
    public password: string,
    public registeredAt: Date,
    public lastLogin: Date,
    public intro: string | null,
    public profile: string | null,
    public role: userRoleType,
  ) {}
}
