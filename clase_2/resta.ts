export class Resta {
    private valor_A: number;
    private valor_B: number;

    constructor(valor_A: number, valor_B: number) {
        this.valor_A = valor_A;
        this.valor_B = valor_B;
    }

    public resultado():number {
        return this.valor_A - this.valor_B;
    }
}