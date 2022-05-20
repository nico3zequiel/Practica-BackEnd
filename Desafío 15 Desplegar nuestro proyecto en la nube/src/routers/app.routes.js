import path from 'path';
import express from 'express';
import authRoutes from './auth/auth.routes.js';
import auth from '../../middlewares/auth.js';
import { getError, getHome, getInfo, getLogout, notFundPage } from '../../controllers/routes.controller.js';
import compression from 'compression';

const router = express.Router();

//Routes
router.use('/auth', authRoutes);

router.get('/', (req, res) => {
  const user = req.user;
  if(user) return res.redirect('/home');
  res.sendFile(path.join(process.cwd(), "/public/login.html"));
});

const isCompression = [];
for (let i = 0; i < process.argv.length; i++) {
  if(process.argv[i] == "-c") 
    isCompression.push(process.argv[i + 1] == "false" ? false : process.argv[i + 1] == "true" ? true : process.argv[i + 1]);
  else isCompression[0] = true;
}
if(isCompression[0]) router.get('/info', compression(), getInfo);
else router.get('/info', getInfo);

router.get('/home', auth, getHome);

router.get('/logout', auth, getLogout);

router.get('/register-error', (req, res) => getError(req, res, "register-error"));
router.get('/login-error', (req, res) => getError(req, res, "login-error"));

router.get('/*', notFundPage);

export default router;