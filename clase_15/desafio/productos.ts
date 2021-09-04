export interface Producto {
    title: string;
    price: number;
    thumbnail: string;
    id?: number;
}

export class Productos {
    private listaProductos: Producto[];

    constructor() {
        this.listaProductos = [];
        this.createGenesisElements();
    }

    listarTodosLosProductos(): Producto[] {
        return this.listaProductos;
    }

    listarProducto(id: number): Producto | null {
        const prod: Producto = this.listaProductos[id-1];
        return prod ? prod : null;
    }

    guardarProducto(producto: Producto): void {
        const lastIndex: number = this.listaProductos.length-1;
        producto.id = lastIndex >= 0 ? this.listaProductos[lastIndex]?.id : 1;
        this.listaProductos.push(producto);
    }

    private createGenesisElements(): void {
        this.listaProductos.push({
            title: "Escuadra",
            price: 100,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-128.png",
            id: 1
        })

        this.listaProductos.push({
            title: "Compu",
            price: 300,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-256.png",
            id: 2
        })
    }
};

