// desarrollar servidor express con websocket
//COn cada nueva conexion de cliente, el servidor debe 
// emitir por consola el mensaje : nuevo cliente conectado

// import express from 'express';
// import path from 'path';

const express = require('express');
const path = require('path')

const port = 8080;
const app = express();
// const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('public', express.static('./public'));

//OPCION 1
// import http from 'http';
// import * as SocketIO from 'socket.io';
// const io = new SocketIO.Server(server)
// const server = app.listen(port, () => {
//   console.info(`Servidor listo en el puerto ${port}`);
// });

//OPCION 2
const http = require("http").Server(app);
const io = require("socket.io")(http);
http.listen(port, () => console.info(`Servidor listo en el puerto ${port}`));

// -----------------------------------
io.on('connection', socket => {
  console.log('¡Nuevo cliente conectado!')
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})
