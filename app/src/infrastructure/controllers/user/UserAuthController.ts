import { Request, Response } from 'express';
import { IUserRegister } from '~/core/interfaces/user/IUserAuth';
import UserAuthn from '~/core/useCases/user/UserAuth';

class UserAuthController {
  constructor(private userAuth: UserAuthn) {}

  register = async (req: Request, res: Response): Promise<void> => {
    try {
      const data = req.body as IUserRegister;
      const user = await this.userAuth.executeRegister(data);
      res.status(200).json({ data: user });
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, username, password } = req.body as IUserRegister;
      console.log(email, username, password);
      res.status(200).json({ data: email });
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };

  refresh = async (req: Request, res: Response): Promise<void> => {
    try {
      const { refreshToken } = req.body;
      const access = await this.userAuth.executeRefresh(refreshToken);
      res.status(200).json(access);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const access = await this.userAuth.getAll();
      res.status(200).json(access);
    } catch (error) {
      res.status(400).json({ message: error });
    }
  };
}

export default UserAuthController;
