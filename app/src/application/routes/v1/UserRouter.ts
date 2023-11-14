import { Router } from 'express';
import UserAuthValidators from '~/application/validators/user/UserAuthValidators';
import { UserModel } from '~/application/db/models/UserModels';

import UserAuthn from '~/core/useCases/user/UserAuth';
import UserRepository from '~/infrastructure/repositories/user/UserRepository';
import UserAuthController from '~/infrastructure/controllers/user/UserAuthController';
import { validateRequest } from '~/infrastructure/utils/validateRequest';

const router = Router();
const userauthValidators = new UserAuthValidators();
const userRepository = new UserRepository(UserModel);
const userAuth = new UserAuthn(userRepository);
const userAuthnController = new UserAuthController(userAuth);

router.post(
  '/registration',
  validateRequest(userauthValidators.registerSchema()),
  userAuthnController.register,
);
router.post('/login', validateRequest(userauthValidators.loginSchema()), userAuthnController.login);
router.post(
  '/refresh',
  validateRequest(userauthValidators.refrashSchema()),
  userAuthnController.refresh,
);
router.get('/', userauthValidators.verifyToken, userAuthnController.getAll);

export default router;
