import { Request, Response } from 'express';
import { IRegisterUserBody } from '~/core/interfaces/user/RegisterUserBody';

class UserController {
  constructor() {}

  async register(req: Request, res: Response): Promise<void> {
    try {
      const { email } = req.body as IRegisterUserBody;
      console.log(email);
      res.status(200).json({ data: email });
    } catch (error) {
      res.status(400).json({ messages: 'errro' });
    }
  }
}

export default UserController;