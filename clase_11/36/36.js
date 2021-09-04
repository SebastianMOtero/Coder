import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const port = 8080;

const personas = [];

// http://localhost:8080/datos?nivel=algo&min=5&max=12&titulo=pepe
// app.set('views', path.join(__dirname, 'views'));


const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs'); // engine de plantillas

app.get("/datos", (req, res) => {
    console.log(personas)
    res.render('index', {personas});
})

app.post("/datos", (req, res) => {
  const {nombre, apellido, edad} = req.body;
  const persona = {
    nombre,
    apellido,
    edad
  };
  personas.push(persona);
  res.render('index', {personas});
})

server.on("error", (error) => {
    console.error(`error ${error}`);
});