"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Productos = void 0;
var Productos = /** @class */ (function () {
    function Productos() {
        this.listaProductos = [];
        this.createGenesisElements();
    }
    Productos.prototype.listarTodosLosProductos = function () {
        return this.listaProductos;
    };
    Productos.prototype.listarProducto = function (id) {
        var prod = this.listaProductos[id - 1];
        return prod ? prod : null;
    };
    Productos.prototype.guardarProducto = function (producto) {
        var _a;
        var lastIndex = this.listaProductos.length - 1;
        producto.id = lastIndex >= 0 ? (_a = this.listaProductos[lastIndex]) === null || _a === void 0 ? void 0 : _a.id : 1;
        this.listaProductos.push(producto);
    };
    Productos.prototype.createGenesisElements = function () {
        this.listaProductos.push({
            title: "Escuadra",
            price: 100,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-128.png",
            id: 1
        });
        this.listaProductos.push({
            title: "Compu",
            price: 300,
            thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-256.png",
            id: 2
        });
    };
    return Productos;
}());
exports.Productos = Productos;
;
