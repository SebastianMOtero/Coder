import express from 'express';

const app = express();
const port = 8080;

const frase = 'Hola mundo como estan';

const server = app.listen(port, () => {
  console.info(`Servidor listo en el puerto ${port}`);
});

app.get("/api/sumar/:num1/:num2", (req, res) => {
    const n1 = Number(req.params.num1);
    const n2 = Number(req.params.num2);
    res.end(String(n1+n2));
});

app.get("/api/suma/", (req, res) => {
    const n1 = Number(req.query.num1);
    const n2 = Number(req.query.num2);
    res.end(String(n1+n2));
});

app.get("/api/suma/:operacion", (req, res) => {
    const operaciones = req.params.operacion.split('+');
    const n1 = Number(operaciones[0]);
    const n2 = Number(operaciones[1]);
    res.end(String(n1+n2));
});

app.delete("/api", (req, res) => {
    res.send("ok delete");
})

app.put("/api", (req, res) => {
    res.send("ok put");
})

app.post("/api", (req, res) => {
    res.send("ok post");
})

server.on("error", (error) => {
    console.error(error);
});