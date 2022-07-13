# Consigna "SERVIDOR EN DENO":

* Crear un servidor que utilice el módulo http servest y genere la vista con React render.
  > Ubicación: "./import_map.json", linea: 6

* Configurar denon para que, ante un cambio de código, el servidor de reinicie automáticamente.
  > Ubicación: "./scripts.config.ts"

* El servidor presentará en su ruta raíz un formulario de ingreso de un color, que será enviado al mismo por método post. Dicho color (en inglés) será incorporado a un array de colores persistido en memoria.
  - Render: 
    > Ubicación: "./server.ts", linea: 19
  - Persistencia:
    > Ubicación: "./models/interfaces/Colors.ts" & "./models/daos/color.dao.ts"

* Por debajo del formulario se deberán representar los colores recibidos en una lista desordenada (ul) utilizando el mismo color para la letra en cada caso. El color de fondo del la vista será negro.
  <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/servest-react.PNG?alt=media&token=3c5abb19-b289-4fea-83c3-ee224b3f9ef1" alt="front React"/></p>
