import { Request, Response } from 'express';
import { IUserRegister } from '~/core/interfaces/user/IUserAuth';
import UserAuthn from '~/core/useCases/user/UserAuth';
import { catchAsync } from '~/infrastructure/middleware/catchAsync';

class UserAuthController {
  constructor(private userAuth: UserAuthn) {}

  register = catchAsync(async (req: Request, res: Response): Promise<void> => {
    const data = req.body as IUserRegister;
    const user = await this.userAuth.executeRegister(data);
    res.status(200).json({ data: user });
  });

  login = catchAsync(async (req: Request, res: Response): Promise<void> => {
    const { email, username, password } = req.body as IUserRegister;
    console.log(email, username, password);
    res.status(200).json({ data: email });
  });

  refresh = catchAsync(async (req: Request, res: Response): Promise<void> => {
    const { refreshToken } = req.body;
    const access = await this.userAuth.executeRefresh(refreshToken);
    res.status(200).json(access);
  });

  getAll = catchAsync(async (req: Request, res: Response): Promise<void> => {
    const access = await this.userAuth.getAll();
    res.status(200).json(access);
  });
}

export default UserAuthController;
