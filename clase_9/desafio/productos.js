export class Productos {
    constructor() {
        this.listaProductos = [
            {
                title: "Escuadra",
                price: 100,
                thumbnail: "www.imageUrl.com",
                id: 1
            },
            {
                title: "Compu",
                price: 300,
                thumbnail: "www.imageUrl.com",
                id: 2
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
        producto.id = this.listaProductos[this.listaProductos.length-1].id + 1;
        this.listaProductos.push(producto);
    }

    saveProduct(data){
        let id = 1
        if (this.listaProductos.length > 0) {
            console.log(this.listaProductos[this.listaProductos.length-1].id+1);
            id = this.listaProductos[this.listaProductos.length-1].id+1;
        }           
        data.id=id;    
        this.listaProductos.push(data);
        return data;
    }
};
