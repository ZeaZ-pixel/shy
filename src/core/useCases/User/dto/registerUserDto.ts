export class RegisterUserDto {
  constructor(
    readonly email: string,
    readonly phone: string,
    readonly _passsword: string,
    readonly username: string,
  ) {}
}
