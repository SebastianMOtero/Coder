const express = require("express");

const app = express();
const port = 8080;

const server = app.listen(port, () => {
  this.visitas = 0;
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>");
});

app.get("/visitas", (req, res) => {
  res.send(`Cantidad de visitas: ${++this.visitas}`);
});

app.get("/fyh", (req, res) => {
  res.json({ fyh: new Date().toLocaleString() });
});

server.on("error", (error) => {
    console.error(error);
});