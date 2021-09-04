// install babel-cli  cliente de babel
// install babel-preset-env   plugin de config

class Colora {
    private R: number;
    private G: number;
    private B: number;

    constructor() {
        this.R = this.generarColor();
        this.G = this.generarColor();
        this.B = this.generarColor();
    }

    generarColor(): number {
        return Math.floor(Math.random() * 256);
    }

    mostrar(): void {
        console.log(`${this.R} ${this.G} ${this.B}`);
    }
}

const color1:Colora = new Colora();
color1.mostrar()