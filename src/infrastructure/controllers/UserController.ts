import { Request, Response } from 'express';
import { IRegisterUserBody } from 'core/interfaces/User/RegisterUserBody';

class UserController {
  constructor() {}

  async register(req: Request, res: Response) {
    try {
      const { email, password, firstName, lastName, phone } = req.body as IRegisterUserBody;
    } catch (error) {
      res.status(409).send({ message: error.message });
    }
  }
}

export default UserController;
