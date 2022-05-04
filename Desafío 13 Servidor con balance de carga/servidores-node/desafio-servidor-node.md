# Consigna:

* Agregar en la vista info, el número de procesadores presentes en el servidor.
  - _La vista info lo encontrará en "./views/info.ejs"_
  - _el código utilizado lo encontrará en "./controllers/routes.controller.js"_
##

* Ejecutar el servidor (modos FORK y CLUSTER) con nodemon verificando el número de procesos tomados por node.
  - nodemon src/index.js -p 3000 -m fork: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/nodemon-fork.PNG?alt=media&token=846ade35-f957-41f7-8a3f-e56b17644ce0" alt="ejemplo nodemon"/></p>
  - nodemon src/index.js -p 3000 -m cluster: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/nodemon-cluster.PNG?alt=media&token=8312f0a1-5802-482b-b5f7-7043d5299a20" alt="ejemplo nodemon"/></p>
##

* Ejecutar el servidor (con los parámetros adecuados) utilizando Forever, verificando su correcta operación. Listar los procesos por Forever y por sistema operativo.
  - forever start src/index.js -p 3000: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/forever-start.PNG?alt=media&token=458f91de-3c58-4df4-8aac-8a9389e593db" alt="ejemplo forever"/></p>
  - forever list: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/forever-list.PNG?alt=media&token=ddbf3a27-99b1-4b90-8fc9-8c6bb968c435" alt="ejemplo forever"/></p>
##

* Ejecutar el servidor (con los parámetros adecuados: modo FORK) utilizando PM2 en sus modos modo fork y cluster. Listar los procesos por PM2 y por sistema operativo.
  - [FORK] pm2 start src/index.js --name "fork-server" -- -p 3000: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/pm2-start-fork.PNG?alt=media&token=c5b15f8f-0238-480f-b555-7b759a997b0d" alt="ejemplo pm2"/></p>
  - [CLUSTER] pm2 start src/index.js -i max --name "cluster-server" -- -p 3000: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/pm2-start-cluster.PNG?alt=media&token=5fc892ba-6ff5-4c5d-8d2e-c304e5dab6f4" alt="ejemplo pm2"/></p>
  - pm2 list: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/pm2-list.PNG?alt=media&token=208bee02-5299-42e9-838a-6e6408ed4128" alt="ejemplo pm2"/></p>
##

* Tanto en Forever como en PM2 permitir el modo escucha, para que la actualización del código del servidor se vea reflejado inmediatamente en todos los procesos.
  - forever -w src/index.js: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/forever-watch.PNG?alt=media&token=84187449-a455-422b-b775-17d1baa05ee4" alt="ejemplo forever"/></p>
  - pm2 start src/index.js --watch: <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/pm2-watch.PNG?alt=media&token=22c684e0-e939-4c1a-a0e3-6b7d33300a0a" alt="ejemplo pm2"/></p>