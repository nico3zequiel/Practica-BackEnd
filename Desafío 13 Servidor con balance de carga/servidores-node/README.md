# Inicialización:

_Ejecutar este comando para poder comenzar a utulizar el codigo sin problemas._

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

_Antes de ejecutar forever o m2 debe hacer primero una configuración:_

  - Ingresar a "src/forever-pm2.json"
  - Cambiar "changeServer" de [**false**](false) a [**true**](true)
  - Guardar cambios y ejecutar forever o pm2.

_Esta configuración evitará ciertos errores en el código._


# Entrega de desafío:

_Las respuestas a la consigna las verá en un archivo llamado "desafio-servidor-node.md"_