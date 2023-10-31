import { Router } from 'express';
import userRoutes from './UserRouter.js';
const router = Router();

router.use('/user', userRoutes);

export default router;
