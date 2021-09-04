// conectamos client con el socket
const socket = io.connect();

socket.on('messages', function (data) {
    console.log(data);
});

function render(data) {
    const html = data.map(function(elem, index){
        return(`<div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em> </div>`)
    }).join("");
    document.getElementById('messages').innerHTML = html;
}

socket.on('messages', function(data) { render(data); });

function addMessage(e) {
    const message = {
        author: document.getElementById('username').value,
        text: document.getElementById('text').value
    };
    document.getElementById('username').value = '';
    document.getElementById('text').value = '';
    socket.emit('new-message', message);
    return false;
}