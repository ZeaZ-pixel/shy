import { Router } from 'express';
import userRoutes from './UserRouter';

const router = Router();

router.use('/user', userRoutes);

export default router;
