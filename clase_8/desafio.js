import express from 'express';
import { Productos } from './productos.js';

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let listado;

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
  listado = new Productos();
});

app.get("/api/productos/listar", (req, res) => {
    const prod = listado.listarTodosLosProductos();
    prod.length ? res.json(prod) : res.json({error: 'no hay productos cargados'});
});

app.get("/api/productos/listar/:id", (req, res) => {
    const id = req.params.id;
    const prod = listado.listarProducto(id);
    prod ? res.json(prod) : res.json({"error": "producto no encontrado"});
});

app.get("/api/productos/guardar", (req, res) => {
    const producto = req.body;
    listado.guardarProducto(producto);
    res.send(producto);
});

server.on("error", (error) => {
    console.error(`error ${error}`);
});