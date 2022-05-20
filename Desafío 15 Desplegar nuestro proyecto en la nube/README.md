# Inicialización:

_Ejecutar este comando para poder comenzar a utilizar el código sin problemas._

```
npm i
```


# Ejecutar node o nodemon:

_Al ejecutar los comandos de la siguiente manera se estará usando el modo FORK que seria por defecto._

* [NODE] - El código se ejecutará en modo producción.
```
npm start
```

* [NODEMON] - El código se ejecutará modo escucha.
```
npm run watch
```

_Para cambiar el puerto y/o modo por defecto se puede ejecutar los comandos de la siguiente manera._

```
npm <ingresar "start" o "run watch"> -- -p <número del puerto> -m <ingresar "fork" o "cluster">
```


# Ejecutar forever o pm2:

_Al ejecutar los comandos de la siguiente manera se estará usando el modo FORK que seria por defecto._

* [FOREVER] - El código se ejecutará con forever.
```
forever start src/index.js
```

* [PM2] - El código se ejecutará con pm2.
```
pm2 start src/index.js
```

## **🚨 Tener en cuenta 🚨 📢**

_Modificar el archivo .env de la siguiente manera:_

  - Ubicarse en "./.env.example"
  - Cambiar el nombre a ".env"
  - Modificar los datos sensibles y guardar.

_Esta configuración evitará ciertos errores en el deploy con heroku desde su PC._


# Entrega de desafío:

_La respuesta a la consigna la encontrará en la siguiente ruta:_
> ubicación: "./desafio.md"