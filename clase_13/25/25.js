const express = require('express');

const port = 8080;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));

server.listen(port, function() {
    console.log(`Server is ready on port ${port}`);
})

const messages = [
    {
        author: "Juan",
        text: "Hola que tal?"
    },
    {
        author: "Pedro",
        text: "Todo bien, vos?"
    },
    {
        author: "Juan",
        text: "Bien"
    }
];

// Detecta conexiones al web socekt
io.on('connection', function(socket) {
    console.log('Un client se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message', function(data) {
        messages.push(data);
        io.sockets.emit('messages', messages);
    })
})