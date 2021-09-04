"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// install babel-cli  cliente de babel
// install babel-preset-env   plugin de config

var Color = function () {
    function Color() {
        _classCallCheck(this, Color);

        this.R = this.generarColor();
        this.G = this.generarColor();
        this.B = this.generarColor();
    }

    _createClass(Color, [{
        key: "generarColor",
        value: function generarColor() {
            return Math.floor(Math.random() * 256);
        }
    }, {
        key: "mostrar",
        value: function mostrar() {
            console.log(this.R + " " + this.G + " " + this.B);
        }
    }]);

    return Color;
}();

var color = new Color();
color.mostrar();
