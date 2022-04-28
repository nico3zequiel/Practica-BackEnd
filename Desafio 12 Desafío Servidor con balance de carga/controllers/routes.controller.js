import env from '../src/env.config.js';
import { args } from '../src/main.js';
import { promises as fs } from "fs";

const file = await fs.readFile(`${process.cwd()}\\package.json`, "utf-8");
const dataJson = JSON.parse(file);

const getInfo = (req, res) => {
  res.render('info', { 
    inputArguments: JSON.stringify(args), 
    platformName: process.platform, 
    versionNode: process.version, 
    rss: process.memoryUsage().rss, 
    path: process.argv[0],
    processId: process.pid, 
    projectFolder: `"${process.cwd()}"`
  });
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
  console.log("User logued out!");
  res.clearCookie(env.SESSION_NAME);
}
const getError = (req, res, page) => {
  const message = `USER ERROR ${page == "register-error" ? "SIGNUP" : "LOGIN"}`;
  res.render('error-session', { title: page , message });
}

export {
  getHome,
  getLogout,
  getError,
  getInfo
}