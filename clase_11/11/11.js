import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 8080;

// http://localhost:8080/datos?nivel=algo&min=5&max=12&titulo=pepe
app.set('views', './views'); // directorio de plantillas
app.set('view engine', 'pug'); // engine de plantillas

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/datos", (req, res) => {
    const {nivel, min, max, titulo} = req.query;
    res.render('index.pug', {nivel, min, max, titulo});
})

server.on("error", (error) => {
    console.error(`error ${error}`);
});