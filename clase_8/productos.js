export class Productos {
    constructor() {
        this.listaProductos = [
            {
                title: "Escuadra",
                price: 100,
                thumbnail: "www.imageUrl.com"
            },
            {
                title: "Compu",
                price: 300,
                thumbnail: "www.imageUrl.com",
                id: 4
            }
        ];
    }

    listarTodosLosProductos() {
        return this.listaProductos;
    }

    listarProducto(id) {
        const prod = this.listaProductos[id-1];
        return prod ? prod : null;
    }

    guardarProducto(producto) {
        this.listaProductos.push(producto);
    }
};
