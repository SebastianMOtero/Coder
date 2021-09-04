const listaProductosHbs = Handlebars.compile(`
<div>
      {{#if products}}
  <table class="table table-dark table-striped table-hover">
  <thead>
      <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Foto</th>
      </tr>
  </thead>
  <tbody>
      {{#each products}}
      <tr>
      <td>{{title}}</td>
      <td>{{price}}</td>
      <td><img src={{thumbnail}} class="" alt="..."></td>
      </tr>
      {{/each}}
  </tbody>
  </table>
      {{else}}
      <div class="card">
          <div class="card-body">
              <h3>No se encontraron productos</h3>
          </div>
      </div>
      {{/if}}

  </div>
`);

const socket = io();

socket.on('cargarLista', data => {
    console.log(data)
    const listaProductosHTML = listaProductosHbs({ products: data})
    document.querySelector('span').innerHTML = listaProductosHTML
})

socket.on('messages', function(data) { render(data); });

function render(data) {
    const html = data.map(function(elem, index){
        return(`<div>
                <strong style="color:blue;">${elem.email}</strong>
                <span style="color:brown;">[${formatDate(elem.time)}]</span>:
                <em style="color:green;">${elem.message}</em> </div>`)
    }).join("");
    document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
    const message = {
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    socket.emit('new-message', message);
    return false;
}

function formatDate(elemDate) {
    const date = new Date(elemDate)
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}