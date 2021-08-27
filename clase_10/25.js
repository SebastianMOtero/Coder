import express from 'express';
import fs from 'fs';

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//is used to register the given template engine callback as ext.
app.engine('cte', (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(new Error(err));
    console.log(options);

    // Levanta el archivo de plantilla y lo pasa a string.
    let rendered = content.toString()
    Object.keys(options.props).map(prop => rendered = rendered.replace(`^^${prop}$$`, options.props[prop]))
    return callback(null, rendered);
  })
});
// views, el directorio donde se encuentran los archivos de plantilla. Ejemplo: app.set('views', './views')
// view engine, el motor de plantilla que se utiliza. Ejemplo: app.set('view engine', 'pug')
app.set('views', './zimviews');
app.set('view engine', 'cte');

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/cte1", (req, res) => {
  const obj = {
    titulo: 'El señor de las moscas',
    mensaje: 'Este es un mensaje',
    autor: 'Sebastian',
    version: 1.0
  };
    res.render('plantilla1', {props: obj})
});

app.get("/cte2", (req, res) => {
  const obj = {
    nombre: 'Juan',
    apellido: 'Lamothe',
    fecha: Date().toString()
  };
    res.render('plantilla2', {props: obj})
});

server.on("error", (error) => {
    console.error(`error ${error}`);
});