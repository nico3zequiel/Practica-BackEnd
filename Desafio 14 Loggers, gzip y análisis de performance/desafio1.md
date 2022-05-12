# Consigna "LOGGERS Y GZIP":

* Incorporar al proyecto de servidor de trabajo la compresión gzip.
  > ubicación: "./src/routers/app.routes.js"
##

* Verificar sobre la ruta /info con y sin compresión, la diferencia de cantidad de bytes devueltos en un caso y otro.
  - con compresión: 
    ``` 
    npm start
    ```
    <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/compression-on.png?alt=media&token=9ba8b832-39d0-430d-a223-3738d084d930" alt="con compresión"/></p>

  - sin compresión: 
    ``` 
    npm start -- -c false
    ```
    <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/compression-off.png?alt=media&token=1785a1be-691a-4771-9573-97f9ed545d86" alt="sin compresión"/></p>
    
  <p align="center"><i>La diferencia es de 0.1kB</i></p>
##

* Luego implementar loggueo (con alguna librería vista en clase) que registre lo siguiente:
  - Ruta y método de todas las peticiones recibidas por el servidor (info): 
    > ubicación: "./middlewares/loggerInfo.js"
  - Ruta y método de las peticiones a rutas inexistentes en el servidor (warning): 
    > ubicación: "./controllers/routes.controller.js"
  - Errores lanzados por las apis de mensajes y productos, únicamente (error): 
    > ubicación: "./models/containers" y "./models/daos"