import express from 'express';

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = 'Frase inicial';

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/api/leer", (req, res) => {
    res.end(frase);
});

app.get("/api/leer/:pos", (req, res) => {
    const pos = req.params.pos
    const fraseArr = frase.split(" ");
    if (pos > fraseArr.length || pos < 1) {
        res.end()
    }
    res.end(fraseArr[pos-1]);
});

app.post("/api/guardar", (req, res) => { console.log(req.body);
    const palabra = req.body.palabra;
    if (palabra) {
        frase += ` ${palabra}`;
    }
    res.end(palabra);
});

app.put("/api/actualizar/:pos", (req, res) => {
    const palabraNueva = req.body.palabra;
    const pos = req.params.pos
    const fraseArr = frase.split(" ");

    if (pos > fraseArr.length || pos < 1) {
        res.end()
    }

    const palabraAnterior = fraseArr[pos-1];
    fraseArr[pos-1] = palabraNueva;
    frase = fraseArr.join(" ");
    res.send(palabraAnterior);
})

app.delete("/api/borrar/:pos", (req, res) => {
    const pos = req.params.pos
    const fraseArr = frase.split(" ");

    if (pos > fraseArr.length || pos < 1) {
        res.end()
    }

    const palabraAnterior = fraseArr[pos-1];
    fraseArr[pos-1] = '';
    frase = fraseArr.join(" ");
    res.send(palabraAnterior);
})

server.on("error", (error) => {
    console.error(error);
});