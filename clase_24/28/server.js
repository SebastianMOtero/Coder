import express from 'express';
import session from 'express-session';

const app = express();
const sessionHandler = session({
    secret: 'secreto',
    resave: true,
    saveUninitialized: true,
});

app.use(sessionHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
    console.log('Server listen on 8080');
});

app.get('/', (request, response) => {
    if (request.session.contador) {
        request.session.contador++;

        return response
            .status(200)
            .send(
                `${request.session.nombre ? request.session.nombre : ''} visitaste la pagina ${request.session.contador} veces`,
            );
    }

    request.session.contador = 1;
    const { nombre } = request.query;
    
    if (nombre && request.session.contador === 1) {
        request.session.nombre = nombre;
    }

    return response
        .status(200)
        .send(`Bienvenido ${request.session.nombre ? request.session.nombre : ''}`);
});

app.get('/olvidar', (request, response) => {
    const { nombre } = request.session;

    request.session.destroy((error) => {
        if (error) {
            return response
                .status(500)
                .send({ error });
        }

        return response
            .status(200)
            .send(`Hasta luego ${nombre ? nombre : ''}`);
    });
});