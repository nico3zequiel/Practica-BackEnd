const path = require('path')
const express = require('express');
const apiRoutes = require('./routers/index');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.static('public'));
/* app.use(express.urlencoded({ extended: true })); */

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './nav-app/index.html'));
});

/* app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './nav-app/logo.svg'));
}); */

app.use('/api', apiRoutes);


const connectedServer = app.listen(PORT, ()=> {
  console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on('error', (error) => {
  console.error('Error: ', error);
})
