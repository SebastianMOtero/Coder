const express = require('express');

const port = 8080;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
app.use(express.static('public'));

const paint = require('./paint')
server.listen(port, function() {
    console.log(`Server is ready on port ${port}`);
})

app.get('/reset', (req, res) => {
    paint.iniMap();
    io.sockets.emit('rectlistdata', paint.mapToArray(paint.rectangleMap));
    res.redirect('/');
})

io.sockets.on('connection', function(socket) {
    const thisClientIP = socket.handshake.address;
    socket.emit('address', thisClientIP);

    socket.on('info', function(data) {
        console.log('socket server info');
        socket.broadcast.emit('info', data)
    })

    socket.on('refresh', function(data) {
        console.log('socket server refresh');
        console.log(data);
    })

    let Size = 4;

    socket.on('rect', function(data) {
        console.log('socket server rect');
        const c = {r: data.r, g: data.g, b: data.b};
        data.x = (Math.trunc(data.x/Size)*Size);
        data.y = (Math.trunc(data.y/Size)*Size);
        const shape = paint.shape(data.x, data.y, Size, Size, c.r, c.g, c.b);
        paint.rectangleMap[data.x][data.y] = shape;

        socket.emit('rect', shape);
        socket.broadcast.emit('rect', shape);
    })
})
