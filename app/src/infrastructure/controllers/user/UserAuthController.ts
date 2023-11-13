import { Request, Response } from 'express';
import { IRegisterUserBody } from '~/core/interfaces/user/RegisterUserBody';

class UserAuthController {
  constructor() {}

  public async register(req: Request, res: Response): Promise<void> {
    try {
      const { email, username, lastName, firstName, password } = req.body as IRegisterUserBody;
      console.log(email);
      res.status(200).json({ data: email });
    } catch (error) {
      res.status(400).json({ messages: 'errro' });
    }
  }

  public async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, username, password } = req.body as IRegisterUserBody;
      console.log(email, username, password);
      res.status(200).json({ data: email });
    } catch (error) {
      res.status(400).json({ messages: 'errro' });
    }
  }
}

export default UserAuthController;
