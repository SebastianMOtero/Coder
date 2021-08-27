import express from 'express';

const app = express();
const port = 8080;

const frase = 'Hola mundo como estan';

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/api/getFrase", (req, res) => {
    res.json(frase);
});

app.get("/api/getLetra/:num", (req, res) => {
    const index = req.params.num;
    control(index, res, frase.length)
    res.json(frase[index-1]);
});

app.get("/api/getPalabra/:num", (req, res) => {
    const index = req.params.num;
    control(index, res, frase.split(" ").length)
    res.json(frase.split(" ")[index-1]);
});

server.on("error", (error) => {
    console.error(error);
});

function control(index, res, len) {
    if (isNaN(index)) {
        res.json({ "error": "El parametro no es numerico"});
    }
    if (index < 1 || index > len) {
        res.json({ "error": "El parametro esta fuera de rango"});
    }
}