// install babel-cli  cliente de babel
// install babel-preset-env   plugin de config
var Colora = /** @class */ (function () {
    function Colora() {
        this.R = this.generarColor();
        this.G = this.generarColor();
        this.B = this.generarColor();
    }
    Colora.prototype.generarColor = function () {
        return Math.floor(Math.random() * 256);
    };
    Colora.prototype.mostrar = function () {
        console.log(this.R + " " + this.G + " " + this.B);
    };
    return Colora;
}());
var color1 = new Colora();
color1.mostrar();
