"use strict";
exports.__esModule = true;
exports.Suma = void 0;
var Suma = /** @class */ (function () {
    function Suma(valor_A, valor_B) {
        this.valor_A = valor_A;
        this.valor_B = valor_B;
    }
    Suma.prototype.resultado = function () {
        return this.valor_A + this.valor_B;
    };
    return Suma;
}());
exports.Suma = Suma;
