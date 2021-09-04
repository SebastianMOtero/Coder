// install babel-cli  cliente de babel
// install babel-preset-env   plugin de config

class Color {
    constructor() {
        this.R = this.generarColor();
        this.G = this.generarColor();
        this.B = this.generarColor();
    }

    generarColor() {
        return Math.floor(Math.random() * 256);
    }

    mostrar() {
        console.log(`${this.R} ${this.G} ${this.B}`);
    }
}

const color = new Color();
color.mostrar()