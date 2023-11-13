import { Router } from 'express';
import UserAuthValidators from '~/application/validators/user/UserAuthValidators';
import { UserModel } from '~/application/db/models/UserModels';

import UserAuthn from '~/core/useCases/user/UserAuth';
import UserAuthRepository from '~/infrastructure/repositories/user/UserAuthRepository';
import UserAuthController from '~/infrastructure/controllers/user/UserAuthController';
import { validateRequest } from '~/infrastructure/middleware/validateRequest';

const router = Router();
const userauthValidators = new UserAuthValidators();
const userAuthRepository = new UserAuthRepository(UserModel);
const userAuth = new UserAuthn(userAuthRepository);
const userAuthnController = new UserAuthController(userAuth);

router.post('/registration', validateRequest(userauthValidators.registerSchema()), userAuthnController.register);
router.post('/login', validateRequest(userauthValidators.loginSchema()), userAuthnController.login);
router.post('/refresh', validateRequest(userauthValidators.refrashSchema()), userAuthnController.refresh);

export default router;
