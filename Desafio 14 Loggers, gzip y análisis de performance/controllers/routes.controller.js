import env from '../src/env.config.js';
import { args } from '../src/index.js';
import os from 'os';
import { warnLogger } from "../utils/logger.utils.js"
import { STATUS } from '../constants/api.constants.js';
const { NOT_FOUND } = STATUS;

const getInfo = (req, res) => {
  const renderInfo = { 
    inputArguments: JSON.stringify(args), 
    platformName: process.platform, 
    versionNode: process.version, 
    rss: process.memoryUsage().rss, 
    path: `"${process.argv[0]}"`,
    processId: process.pid, 
    projectFolder: `"${process.cwd()}"`,
    numOfProcessors: os.cpus().length
  };

  // ↓↓↓ comentar/descomentar según pida la consigna ↓↓↓
      // console.log(renderInfo);
  // ↑↑↑ comentar/descomentar según pida la consigna ↑↑↑
  
  res.render('info', renderInfo);
}
const getHome = (req, res) => {
  const user = req.user.email;
  res.render('home', { nombre: user });
}
const getLogout = (req, res) => {
  const user = req.user.email;
  req.logout();
  req.session.destroy(err => {
    if(err) res.clearCookie(env.SESSION_NAME);
    res.render("logout", { nombre: user });
  });
  console.log(`User ${user} logued out!`);
  res.clearCookie(env.SESSION_NAME);
}
const getError = (req, res, page) => {
  const message = `USER ERROR ${page == "register-error" ? "SIGNUP" : "LOGIN"}`;
  res.render('error-session', { title: page , message });
}
const notFundPage = (req, res) => {
  const route = req.url;
  const method = `[${req.method}]`;
  warnLogger.warn({ route, method });
  res.send({ error: NOT_FOUND.tag, status: NOT_FOUND.code });
}

export {
  getHome,
  getLogout,
  getError,
  getInfo,
  notFundPage
}