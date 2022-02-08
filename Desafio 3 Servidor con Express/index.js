const express = require('express');
const PORT = process.env.PORT || 8080;
const Contenedor = require('./contenedor')
const contenedor = new Contenedor();
const app = express();


app.get('/', (req, res) => {
    res.send('Desafio 3 BackEnd')
});

app.get("/productos", async (req, res) => {
    res.send(await contenedor.getAll());
});

app.get("/productoRandom", async (req, res) => {
    res.send(await contenedor.getRandom());
});

app.listen(PORT, () => {
    console.log(`Servidor activo ejecutandose en el puerto: ${PORT}`)
});