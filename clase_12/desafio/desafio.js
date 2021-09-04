import express from 'express';
import { Productos } from './productos.js';
import handlebars from 'express-handlebars';
import path from 'path';
import http from 'http';
import * as SocketIO from 'socket.io';

const __dirname = path.resolve();
const app = express();
const port = 8080;


app.engine(
    'hbs', 
    handlebars({
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: __dirname + '/views/layouts',
        partialsDir: __dirname + '/views/partials/'
    })
);

app.set('views', './views'); // directorio de plantillas
app.set('view engine', 'hbs'); // engine de plantillas
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use("/api", router);

let listado;

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
  listado = new Productos();
});

const io = new SocketIO.Server(server);

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

router.get("/productos/listar", (req, res) => {
    const prod = listado.listarTodosLosProductos();
    prod.length ? res.json(prod) : res.json({error: 'no hay productos cargados'});
});

router.get("/productos/listar/:id", (req, res) => {
    const id = req.params.id;
    const prod = listado.listarProducto(id);
    prod ? res.json(prod) : res.json({"error": "producto no encontrado"});
});

router.post("/productos/guardar", (req, res) => {
    const producto = req.body;
    listado.guardarProducto(producto);
    io.sockets.emit('cargarLista', listado.listarTodosLosProductos());
    res.redirect('/');
});

router.put('/productos/actualizar/:id', (Req, res) => {

})

router.delete('/productos/borrar/:id', (Req, res) => {

})

app.get("/productos/vista", (req, res) => {
    const prod = listado.listarTodosLosProductos();
    res.render('main', {products: prod});
});

server.on("error", (error) => {
    console.error(`error ${error}`);
});

io.on('connection', socket => {
    console.log('¡Nuevo cliente conectado!')
    socket.emit('cargarLista', listado.listarTodosLosProductos());
    
    // socket.on('desafio 2', data => {
    //   listaMensajes.push(data);
    //   io.sockets.emit('mensajes', [data]);
    // })
  })

//   socket.on('desafio 2', data => {
//     listaMensajes.push(data);
//     io.sockets.emit('mensajes', [data]);
// })

/*
socket.emit('socketName', funcion);    -> emite un mensaje al socketName
socket.on('socketName', funcion);      -> recibe un mensaje del socketName
io.sockets.emit('socketName', funcion) -> emite broadcast a todos 
*/