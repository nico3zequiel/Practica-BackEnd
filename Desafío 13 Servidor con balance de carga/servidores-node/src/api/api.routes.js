import express from 'express';
import randomRoutes from './random/random.routes.js';

const router = express.Router();

//Routes
router.use('/randoms', randomRoutes);

export default router;