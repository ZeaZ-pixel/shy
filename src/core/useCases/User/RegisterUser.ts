import { UserGateways } from '../../gateways/UserGateways/UserGateways';
import { RegisterUserDto } from './dto/registerUserDto';

export class RegisterUser {
  private userGateway: UserGateways;
  constructor(userGateway: UserGateways) {
    this.userGateway = userGateway;
  }
  async execute(data: RegisterUserDto) {
    const existingUser = await this.userGateway.findByEmail(data.email);
    if (existingUser) {
      throw new Error('Email is already in use.');
    }

    const user = new User(0, data.firstName, data.lastName, data.email, data.password); // ID is temporary here
    return this.userRepository.save(user);
  }
}
