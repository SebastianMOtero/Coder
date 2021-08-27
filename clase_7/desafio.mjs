import express from 'express';
import fs from 'fs';
import { parse } from 'path';

const app = express();
const port = 8080;

let visitasRutaItems = 0;
let visitasRutaItemRandom = 0;

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/items", (req, res) => {
  visitasRutaItems++;
  fs.promises
    .readFile("./productos.txt", 'utf-8')
    .then(archivo => res.send(JSON.parse(archivo)))
    .catch(err => res.send(err))
  // responde { items: [productos], cantidad: (cantidad productos)}
  // res.send("<h1 style='color: blue'>Bienvenidos al servidor express</h1>");
});

app.get("/item-random", (req, res) => {
  visitasRutaItemRandom++;
  // responde { item: {producto}}
  fs.promises
    .readFile("./productos.txt", 'utf-8')
    .then(archivo => {
      const obj = JSON.parse(archivo);
      const item = {
        "item": obj[Math.trunc(Math.random() * obj.length)],
      }
      res.json(item);
    })
    .catch(err => res.send(err))
});

app.get("/visitas", (req, res) => {
  const visita = {
    visitas: {
      items: visitasRutaItems,
      item: visitasRutaItemRandom,
    }
  }
  res.json(visita);
});

server.on("error", (error) => {
    console.error(error);
});