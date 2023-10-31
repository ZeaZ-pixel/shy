import { Router } from 'express';
import UserController from 'infrastructure/controllers/UserController';

const router = Router();
const userController = new UserController();

router.post('/registration', userController.register);

export default router;
