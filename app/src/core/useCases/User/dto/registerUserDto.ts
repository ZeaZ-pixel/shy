export class RegisterUserDto {
  constructor(
    readonly email: string,
    readonly phone: string,
    readonly passsword: string,
    readonly username: string,
  ) {}
}
