import { Router } from 'express';
import UserAuthController from '~/infrastructure/controllers/user/UserAuthController';
import { validateRequest } from '~/infrastructure/middleware/validateRequest';
import UserAuthValidators from '~/application/validators/user/UserAuthValidators';

const router = Router();
const userAuthnController = new UserAuthController();
const userauthValidators = new UserAuthValidators();

router.post('/registration', validateRequest(userauthValidators.registerSchema()), userAuthnController.register);
router.post('/login', validateRequest(userauthValidators.loginSchema()), userAuthnController.login);

export default router;
