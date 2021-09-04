import express from 'express';
import { Producto, Productos } from './productos';
import handlebars from 'express-handlebars';
import * as path from 'path';
import * as SocketIO from 'socket.io';
import * as fs from 'fs';

const __dirname: string = path.resolve();
const app: express.Express = express();
const port: number = 8080;


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

const router: express.Router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);

let listado: Productos;

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
  listado = new Productos();
});

const io = new SocketIO.Server(server);

app.get("/", (req: express.Request, res: express.Response) => {
    res.sendFile(__dirname + '/public/index.html');
})

router.get("/productos/listar", (req: express.Request, res: express.Response) => {
    const prod: Producto[] = listado.listarTodosLosProductos();
    prod.length ? res.json(prod) : res.json({error: 'no hay productos cargados'});
});

router.get("/productos/listar/:id", (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    const prod: Producto | null = listado.listarProducto(Number(id));
    prod ? res.json(prod) : res.json({"error": "producto no encontrado"});
});

router.post("/productos/guardar", (req: express.Request, res: express.Response) => {
    const producto = req.body;
    listado.guardarProducto(producto);
    io.sockets.emit('cargarLista', listado.listarTodosLosProductos());
    res.redirect('/');
});

router.put('/productos/actualizar/:id', (req: express.Request, res: express.Response) => {

})

router.delete('/productos/borrar/:id', (req: express.Request, res: express.Response) => {

})

app.get("/productos/vista", (req: express.Request, res: express.Response) => {
    const prod: Producto[] = listado.listarTodosLosProductos();
    res.render('main', {products: prod});
});

server.on("error", (error: Error) => {
    console.error(`error ${error}`);
});

io.on('connection', async socket => {
    console.log('¡Nuevo cliente conectado!')
    socket.emit('cargarLista', listado.listarTodosLosProductos());
    
    try {
        const messageFile = await fs.promises.readFile('./messages.txt', 'utf-8');
        io.sockets.emit('messages', JSON.parse(messageFile));
    } catch (error) {
        
    }

    socket.on('new-message', async function(data) {
        //levanta archivo pushear y guardar
        try {
            data.time = Date();
            const messageFile: string = await fs.promises.readFile('./messages.txt', 'utf-8');
            const messageObj = JSON.parse(messageFile);
            messageObj.push(data);
            await fs.promises.writeFile('./messages.txt', JSON.stringify(messageObj, null, '\t'));
            io.sockets.emit('messages', messageObj);
        } catch (error) {
            console.log('error new-message');
        }
    })
})
