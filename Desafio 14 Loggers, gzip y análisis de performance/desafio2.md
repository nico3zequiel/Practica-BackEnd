# Consigna "ANÁLISIS COMPLETO DE PERFORMANCE":

* Vamos a trabajar sobre la ruta '/info', en modo fork, agregando ó extrayendo un console.log de la información colectada antes de devolverla al cliente. Además desactivaremos el child_process de la ruta '/randoms'.
Para ambas condiciones (con o sin console.log) en la ruta '/info' OBTENER:
  - El perfilamiento del servidor, realizando el test con --prof de node.js. Analizar los resultados obtenidos luego de procesarlos con --prof-process.
    > ubicación: "./result-info.txt" y "./result-process-info.txt"
  - Utilizaremos como test de carga Artillery en línea de comandos, emulando 50 conexiones concurrentes con 20 request por cada una. Extraer un reporte con los resultados en archivo de texto.
    > ubicación: "./result-artillery.txt"
##

* Luego utilizaremos Autocannon en línea de comandos, emulando 100 conexiones concurrentes realizadas en un tiempo de 20 segundos. Extraer un reporte con los resultados (puede ser un print screen de la consola):
  <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/autocannon.PNG?alt=media&token=468b7d1a-e425-4c44-826f-e08503224803" alt="autocannon"/></p>
##

* El perfilamiento del servidor con el modo inspector de node.js --inspect. Revisar el tiempo de los procesos menos performantes sobre el archivo fuente de inspección.
  <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/inspect-info.PNG?alt=media&token=2fe66c0b-d175-4ed6-993e-c035ef35e281" alt="inspect info"/></p>
##

* El diagrama de flama con 0x, emulando la carga con Autocannon con los mismos parámetros anteriores.
  <p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/backend-clases.appspot.com/o/diagram-0x.PNG?alt=media&token=2bc1dd90-ad51-4327-8db6-3eacd005f6f5" alt="diagrama de flama con 0x"/></p>
##

* Realizar un informe en formato pdf sobre las pruebas realizadas incluyendo los resultados de todos los test (texto e imágenes).
  > ubicación: "./informe.pdf"