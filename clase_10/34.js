import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

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

app.set('views', './views');
app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/", (req, res) => {
    const users = [
        {
            nombre: 'Emilia',
            apellido: 'Loidl',
            edad: 27,
            email: 'emilialoidl@hotmail.com',
            telefono: '1562548367'
        },
        {
            nombre: 'Juan',
            apellido: 'Cruz',
            edad: 37,
            email: 'jcruz@hotmail.com',
            telefono: '156283823'
        }
    ]

    res.render('main', {users: users})
});

server.on("error", (error) => {
    console.error(`error ${error}`);
});