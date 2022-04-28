import path from 'path';
import express from 'express';
import authRoutes from './auth/auth.routes.js';
import auth from '../../middlewares/auth.js';
import { getError, getHome, getInfo, getLogout } from '../../controllers/routes.controller.js';

const router = express.Router();

//Routes
router.use('/api', authRoutes);

router.get('/', (req, res) => {
  const user = req.user;
  if(user) return res.redirect('/home');
  res.sendFile(path.join(process.cwd(), "/public/login.html"));
});

router.get('/info', auth, getInfo);

router.get('/home', auth, getHome);

router.get('/logout', auth, getLogout);

router.get('/register-error', (req, res) => getError(req, res, "register-error"));
router.get('/login-error', (req, res) => getError(req, res, "login-error"));

export default router;