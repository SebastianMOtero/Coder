// conectamos client con el socket
const socket = io.connect();

const playingField =  document.getElementById('playingfield');
console.log(playingField)
const ctx = playingField.getContext('2d');
playingField.addEventListener('touchstart', onTouchStart, false);
playingField.addEventListener('touchmove', onTouchMove, false);
let bMouseDown = false;

function Coords(x, y, r, g, b) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.g = g;
    this.b = b;
}

const coords = new Coords(0, 0, 0, 0, 0);

window.addEventListener('load', function() {
    document.getElementById('blackCheck').checked = true;

    socket.emit('refresh', 'rectlist');

    document.getElementById('blackCheck').addEventListener('change', function() {
        coords.r = 0;
        coords.g = 0;
        coords.b = 0;
    })

    document.getElementById('blueCheck').addEventListener('change', function() {
        coords.r = 0;
        coords.g = 0;
        coords.b = 255;
    })

    document.getElementById('redCheck').addEventListener('change', function() {
        coords.r = 255;
        coords.g = 0;
        coords.b = 0;
    })

    document.getElementById('greenCheck').addEventListener('change', function() {
        coords.r = 0;
        coords.g = 255;
        coords.b = 0;
    })
})

socket.on('info', function(data) {
    console.log('socket client info');
    document.getElementById('information').innerHTML = data;
})

socket.on('rect', function(data) {
    console.log(data)
    console.log('socket client rect');
    document.getElementById('information').innerHTML = `
    x: ${data.x}
    y: ${data.y}`;

    ctx.fillStyle = `rgb(${data.r}, ${data.g}, ${data.b})`;
    ctx.fillRect(data.x - data.w / 2, data.y - data.h / 2, data.w, data.h);
})

socket.on('rectlistdata', function(data) {
    console.log('socket client rectlistdata');
    document.getElementById('information').innerHTML = 'Received Up to Date Data from server';
    ctx.clearRect(0, 0, 1280, 768);
    for (const k in data) {
        const r = data[k];
        if (r != null) {
            ctx.fillStyle = `rgb(${r.r}, ${r.g}, ${r.b})`;
            ctx.fillRect(r.x - r.w / 2, r.y - r.h / 2, r.w, r.h);
        }
    }
})

socket.on('address', function(data) {
    console.log('socket client address');
    document.getElementById('address').innerHTML = data;
})

function onMouseMove(e) {
    if (bMouseDown) {
        const box = playingField.getBoundingClientRect();
        const Y = e.clientY - box.top;
        const X = e.clientX - box.left;
        coords.x = X;
        coords.y = Y;
        const R = coords.r;
        const G = coords.g;
        const B = coords.b;

        socket.emit('rect', coords);
        document.getElementById('information').innerHTML = 
        `x: ${parseInt(X)} - y: ${parseInt(Y)} @ R: ${parseInt(R)} - G: ${parseInt(G)} - B: ${parseInt(B)}`
    }
}

function onMouseUp(e) {
    bMouseDown = false;
}

function onMouseLeave(e) {
    bMouseDown = false;
}

function onMouseDown(e) {
    bMouseDown = true;
    const box = playingField.getBoundingClientRect();
    const Y = e.clientY - box.top;
    const X = e.clientX - box.left;
    coords.x = X;
    coords.y = Y;
    const R = coords.r;
    const G = coords.g;
    const B = coords.b;

    socket.emit('rect', coords);
    document.getElementById('information').innerHTML = 
        `x`
}

function onTouchStart(e) {
    e.preventDefault();
    if (e.touches) {
        if (e.touches.length >= 1) {
            const t = e.touches[0];
            const box = playingField.getBoundingClientRect();

            const Y = t.pageY - box.top;
            const X = t.pageX - box.left;
            coords.x = X;
            coords.y = Y;
            socket.emit('rect', coords);
        }
    }
}

function onTouchMove(e) {
    e.preventDefault();
    if (e.touches) {
        if (e.touches.length >= 1) {
            const t = e.touches[0];
            const box = playingField.getBoundingClientRect();

            const Y = t.pageY - box.top;
            const X = t.pageX - box.left;
            coords.x = X;
            coords.y = Y;
            socket.emit('rect', coords);
        }
    }
}