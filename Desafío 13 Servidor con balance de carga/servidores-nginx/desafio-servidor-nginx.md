# Consigna:

* Redirigir todas las consultas a /api/randoms a un cluster de servidores escuchando en el puerto 8081. El cluster será creado desde node utilizando el módulo nativo cluster.
  ```
  npm start -- -m cluster -p 8081
  ```
##

* El resto de las consultas, redirigirlas a un servidor individual escuchando en el puerto 8080.
  ```
  npm start
  ```

    #
    Ejemplo1:
      <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/nginx-part1.PNG?alt=media&token=4fdb2146-69a1-407f-b067-bcb81f5b9104" alt="ejemplo nginx"/></p>
    **_usar la configuracion de nginx llamada "nginx.example1.conf", deberá copiar el contenido y pegarlo en su archivo de configuracion donde esté hubicado el "nginx.exe"_**
    #

* Luego, modificar la configuración para que todas las consultas a /api/randoms sean redirigidas a un cluster de servidores gestionado desde nginx, repartiéndolas equitativamente entre 4 instancias escuchando en los puertos 8082, 8083, 8084 y 8085 respectivamente..
  ```
  pm2 start src/index.js -i 2 --name "server-one" -- -p 8082
  pm2 start src/index.js -i 2 --name "server-two" -- -p 8083
  pm2 start src/index.js -i 2 --name "server-three" -- -p 8084
  pm2 start src/index.js -i 2 --name "server-four" -- -p 8085
  ```
  
    #
    Ejemplo2:
      <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/nginx-part2.PNG?alt=media&token=24013554-614e-4012-ac43-e4cfc694e4c3" alt="ejemplo nginx"/></p>
    **_usar la configuracion de nginx llamada "nginx.example2.conf", deberá copiar el contenido y pegarlo en su archivo de configuracion donde esté hubicado el "nginx.exe"_**
    #