"use strict";
exports.__esModule = true;
exports.Resta = void 0;
var Resta = /** @class */ (function () {
    function Resta(valor_A, valor_B) {
        this.valor_A = valor_A;
        this.valor_B = valor_B;
    }
    Resta.prototype.resultado = function () {
        return this.valor_A - this.valor_B;
    };
    return Resta;
}());
exports.Resta = Resta;
