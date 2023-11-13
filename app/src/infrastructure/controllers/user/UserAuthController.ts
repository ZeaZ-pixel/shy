import { Request, Response } from 'express';
import { IUserRegister } from '~/core/interfaces/user/IUserAuth';
import UserAuthn from '~/core/useCases/user/UserAuth';

class UserAuthController {
  constructor(private userAuth: UserAuthn) {}

  public async register(req: Request, res: Response): Promise<void> {
    try {
      const data = req.body as IUserRegister;
      const user = this.userAuth.executeRegister(data);
      res.status(200).json({ data: user });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, username, password } = req.body as IUserRegister;
      console.log(email, username, password);
      res.status(200).json({ data: email });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }

  public async refresh(req: Request, res: Response) {
    try {
      const { refreshToken } = req.body;
      const access = await this.userAuth.executeRefresh(refreshToken);
      res.status(200).json(access);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  }
}

export default UserAuthController;
