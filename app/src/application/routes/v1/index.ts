import { Router } from 'express';
import userRoutes from './UserRouter';

const router = Router();

router.use('/users', userRoutes);

export default router;
