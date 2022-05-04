import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from 'mongoose';
import passport from "../middlewares/passport.js";

import env from './env.config.js';
import dbConfig from "../db/config.js";
import routes from './routers/app.routes.js';
import apis from './api/api.routes.js';

import { Server as HttpServer } from "http";
import { Server as Socket } from "socket.io";

import addProductsHandlers from "./ws/productos.js";
import addMenssagesHandlers from "./ws/mensajes.js";

const mainServer = (args) => {
  //--------------------------------------------
  // instancio servidor, socket y api
  const app = express();
  const httpServer = new HttpServer(app);
  const io = new Socket(httpServer);

  //--------------------------------------------
  // configuro el socket
  io.on("connection", async socket => {
    addProductsHandlers(socket, io.sockets);
    addMenssagesHandlers(socket, io.sockets);
  });

  //--------------------------------------------
  // configuro el servidor
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));

  app.use(session({
    name: env.SESSION_NAME,
    store: MongoStore.create({ 
      mongoUrl: dbConfig.mongodb.connectTo('sessions') 
    }),
    secret: [env.SESSION_SECRET],
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 600000 } // se cerrará la sesion en 10mints.
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  //--------------------------------------------
  // Template engines
  app.set('views', './views');
  app.set("view engine", "ejs");

  //--------------------------------------------
  // rutas del servidor API
  app.use(routes);
  app.use(apis);

  //--------------------------------------------
  // inicio el servidor
  httpServer.listen(args.PORT, () => {
    mongoose.connect(dbConfig.mongodb.connectTo('ecommerce'))
    .then(() => {
      console.log('Connected to DB!');
      console.log('Server is up and running on port: ', args.PORT);
    })
    .catch(err => {
      console.log(`An error occurred while connecting the database`);
      console.log(`Error en servidor `, err);
    })
  });
}

export default mainServer;